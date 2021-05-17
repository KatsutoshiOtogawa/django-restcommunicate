#
dnf update -y

dnf install -y nodejs yarnpkg

yum install -y python3-devel
# install pexpect tools in pyhton3.
pip3 install pexpect

# install for parsing json.
dnf -y install jq

# read json file.
json=$(cat /vagrant/development.host.json)

username=`echo $json | jq -r .db.username`
password=`echo $json | jq -r .db.password | xargs -n 1 -I {} echo \'{}\'`

database=`echo $json | jq -r .db.database`

sa_password=`echo $json | jq -r .db.sa_password`

curl -o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/8/mssql-server-2019.repo

yum install -y mssql-server

python3 << END
import pexpect
# Express is 3
Edition = "3"

password = "${sa_password}"

shell_cmd = "/opt/mssql/bin/mssql-conf setup"

prc = pexpect.spawn('/bin/bash', ['-c', shell_cmd],timeout=1200)
prc.expect("Enter your edition")
prc.sendline(Edition)

prc.expect("Do you accept the license terms")
prc.sendline("Yes")

prc.expect("Enter the SQL Server system administrator password")
prc.sendline(password)

prc.expect("Confirm the SQL Server system administrator password")
prc.sendline(password)

prc.expect( pexpect.EOF )
END


firewall-cmd --zone=public --add-port=1433/tcp --permanent
firewall-cmd --reload

# install mssql-commandline tool
curl -o /etc/yum.repos.d/msprod.repo https://packages.microsoft.com/config/rhel/8/prod.repo

# yum install -y mssql-tools unixODBC-devel

python3 << END
import pexpect
shell_cmd = "yum install -y mssql-tools unixODBC-devel"
prc = pexpect.spawn('/bin/bash', ['-c', shell_cmd],timeout=1200)

prc.expect("Do you accept the license terms")
prc.sendline("Yes")

prc.expect("Do you accept the license terms")
prc.sendline("Yes")

prc.expect( pexpect.EOF )
END

echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bash_profile
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc

su -c vagrant echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> /home/vagrant/.bash_profile
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> /home/vagrant/.bashrc

su -c vagrant << END
echo export PATH=\$PATH:/opt/mssql-tools/bin >> /home/vagrant/.bash_profile
echo export PATH=\$PATH:/opt/mssql-tools/bin >> /home/vagrant/.bashrc
echo export PATH=\$PATH:/home/vagrant/.local/bin >> /home/vagrant/.bash_profile
echo export PATH=\$PATH:/home/vagrant/.local/bin >> /home/vagrant/.bashrc
END



# mysql -u root << END
# CREATE USER ${username} IDENTIFIED BY ${password};
# CREATE DATABASE ${database};
# GRANT ALL PRIVILEGES ON ${database}.* TO ${username};
# -- setting for creating function in mariadb environment.
# SET GLOBAL log_bin_trust_function_creators = 1
# END

sqlcmd -S localhost -U SA -P $sa_password << EOF
CREATE DATABASE ${database};
GO

USE ${database};
CREATE LOGIN ${username} WITH PASSWORD = ${password};
CREATE USER ${username} FOR LOGIN ${username};
-- CREATE USER ${username} WITH PASSWORD = ${password};
GRANT ALL ON DATABASE::${database} TO ${username};
GO
EOF

# sqlcmd -S localhost -U SA -P $sa_password << EOF2
# RESTORE DATABASE [AdventureWorks2019]
# FROM DISK = '/var/opt/mssql/data/AdventureWorks2019.bak'
# WITH MOVE 'AdventureWorks2017' TO '/var/opt/mssql/data/AdventureWorks2019.mdf',
# MOVE 'AdventureWorks2017_log' TO '/var/opt/mssql/data/AdventureWorks2019_log.ldf',
# FILE = 1,  NOUNLOAD,  STATS = 5
# GO
# EOF2

# restore database
# dumpfile=`ls -1 /vagrant/dumps/dump.*.sql | sort | tail -n 1`
# mysql -u root $database < $dumpfile

# restore additionnal dump files.
# adddumpfiles=`ls -1 /vagrant/dumps/[0-9].*.sql | sort `
# for val in ${adddumpfiles[@]}; do
#     mysql -u root $database < $val
# done

# install api library
su vagrant -c "pip3 install -r /vagrant/api/requirements.txt"

# install next library
su vagrant -c "cd /vagrant/front && yarnpkg install"
