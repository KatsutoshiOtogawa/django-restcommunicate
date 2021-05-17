# Desire

# DB
MSSQL

## table design
```sql
CREATE TABLE expression_rule_category (
    id int IDENTITY(1,1) NOT NULL
    ,name nvarchar(40)
    ,explain nvarchar(200)
    ,created_at datetime default current_timestamp
    ,updated_at timestamp default current_timestamp on update current_timestamp
    ,CONSTRAINT PK_TransactionHistoryArchive_TransactionID PRIMARY KEY CLUSTERED (id)
);
GO

EXEC sys.sp_addextendedproperty  @name=N'Comment'
                                ,@value=N'表現のカテゴリ名です。'
                                ,@level0type=N'SCHEMA'
                                ,@level0name=N'dbo'
                                ,@level1type=N'TABLE'
                                ,@level1name=N'expression_rule_category'
                                ,@level2type=N'COLUMN'
                                ,@level2name=N'name'
;
GO

EXEC sys.sp_addextendedproperty  @name=N'Comment'
                                ,@value=N'nameについての説明です。'
                                ,@level0type=N'SCHEMA'
                                ,@level0name=N'dbo'
                                ,@level1type=N'TABLE'
                                ,@level1name=N'expression_rule_category'
                                ,@level2type=N'COLUMN'
                                ,@level2name=N'explain'
;
GO

CREATE TABLE expression_rule (
    id int IDENTITY(1,1) NOT NULL
    ,expression_rule_category_id int 
    ,name nvarchar(40)
    ,permited Bit
    ,mypolicy Bit
    ,created_at datetime default current_timestamp
    ,updated_at timestamp default current_timestamp on update current_timestamp
    ,CONSTRAINT PK_TransactionHistoryArchive_TransactionID PRIMARY KEY CLUSTERED (id)
    ,CONSTRAINT FK_TempSales_SalesReason FOREIGN KEY (expression_rule_category_id) REFERENCES expression_rule_category (id)
);
GO

EXEC sys.sp_addextendedproperty  @name=N'Comment'
                                ,@value=N'表現のカテゴリへの外部キーです。'
                                ,@level0type=N'SCHEMA'
                                ,@level0name=N'dbo'
                                ,@level1type=N'TABLE'
                                ,@level1name=N'expression_rule'
                                ,@level2type=N'COLUMN'
                                ,@level2name=N'category_id'
;
GO

EXEC sys.sp_addextendedproperty  @name=N'Comment'
                                ,@value=N'表現の規制名です。'
                                ,@level0type=N'SCHEMA'
                                ,@level0name=N'dbo'
                                ,@level1type=N'TABLE'
                                ,@level1name=N'expression_rule'
                                ,@level2type=N'COLUMN'
                                ,@level2name=N'name'
;
GO

EXEC sys.sp_addextendedproperty  @name=N'Comment'
                                ,@value=N'表現が一般に許されているかどうかです。
                                nullのときは不定'
                                ,@level0type=N'SCHEMA'
                                ,@level0name=N'dbo'
                                ,@level1type=N'TABLE'
                                ,@level1name=N'expression_rule'
                                ,@level2type=N'COLUMN'
                                ,@level2name=N'permited'
;
GO

EXEC sys.sp_addextendedproperty  @name=N'Comment'
                                ,@value=N'当サークルで許されているかどうかです。
                                nullのときは不定'
                                ,@level0type=N'SCHEMA'
                                ,@level0name=N'dbo'
                                ,@level1type=N'TABLE'
                                ,@level1name=N'expression_rule'
                                ,@level2type=N'COLUMN'
                                ,@level2name=N'mypolicy'
;
GO
```

# frontend


# backend
Spring Boot Rest api + swagger


## access

# code

# 