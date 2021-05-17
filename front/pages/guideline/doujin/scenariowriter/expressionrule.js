import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500
  },
  table: {
    minWidth: 650
  }
});

function createData(name, permited, mypolicy) {
  return { name, permited, mypolicy };
}

export default function GuidelineScenariowriterExpressionrulePage() {
  const classes = useStyles();

  // const [data,setData] = useState({});
  // // get data
  // useEffect(() => {
  //     fetch(`https://xxx/lists?page=1`)
  //     .then( res => res.json() )
  //     .then( res => {
  //         setData(res);
  //     });
  // });


  const racerows = [
    createData("白人", false, false),
    createData("黒人", false, false),
    createData("黄色人種", false, false),
    createData("イヌイット", false, false),
    createData("ローマ人", false, false),
    createData("ペルシア人", false, false),
    createData("日本人", true, true),
    createData("アメリカ人", true, true),
    createData("タイ人女性", true, true),
    createData("中華娘", true, true),
    createData("チャイニーズ", null, true),
    createData("架空の人種", true, true)
  ];

  const countrynamerows = [
    createData("アフリカの一部の国名", false, false),
    createData("韓国", null, false),
    createData("それ以外の国", true, true)
  ];

  const placenamerows = [
    createData("東京", true, true),
    createData("名古屋市", true, true),
    createData("博多", true, true),
    createData("池袋", true, true),
    createData("東京都新宿区新宿3-14", false, false),
    createData("仙台市青葉区", false, false)
  ];
  const placesymbolnamerows = [
    createData("東京ビッグサイト", true, true),
    createData("複数会社が乗り入れている実在する駅", true, true),
    createData("複数会社が乗り入れていない実在する駅", false, false),
    createData("実在する城", false, false),
    createData("実在する空港", false, false),
    createData("その他企業が商標を有しているシンボル", false, false)
  ];

  const regionnamerows = [
    createData("実在する宗教", false, false),
    createData(
      "実在する宗教の預言者、始祖(キリスト、ブッダ、マホメット)など",
      false,
      false
    ),
    createData("日本神話の神", true, true),
    createData("ギリシャ神話の神", true, true),
    createData("北欧神話の神", true, true)
  ];

  const insultnamerows = [
    createData("ちび", true, true),
    createData("でぶ", true, true),
    createData("びっち", true, true),
    createData("はげ", true, true),
    createData("気が狂う", true, true),
    createData("気がふれる", true, true),
    createData("ぐず", true, true),
    createData("ばか", true, true),
    createData("あほ", true, true),
    createData("まぬけ", true, true),
    createData("ぶす", true, true),
    createData("不細工", true, true),
    createData("低能", true, true),
    createData("無能", true, true),
    createData("キチ", true, true),
    createData("頭がおかしい", true, true),
    createData("狂った", true, true),
    createData("かたわ", false, false),
    createData("めくら", false, false),
    createData("キチガイ", false, false),
    createData("痴呆", false, false),
    createData("アルツハイマー", false, false)
  ];

  const agenamerrows = [
    createData("女子高生", false, false),
    createData("女子高", false, false),
    createData("女子校生", true, true),
    createData("女学生", true, true),
    createData("女子校", true, true),
    createData("女学園", true, true),
    createData("中学生", false, false),
    createData("小学生", false, false),
    createData("幼児", false, false),
    createData("ランドセル", false, false),
    createData("ロリ", false, false),
    createData("ショタ", null, true)
  ];

  const scatologynamerows = [
    createData("糞", null, true),
    createData("尿", true, true),
    createData("嘔吐", true, true)
  ];

  const financenamerows = [
    createData("パチンコ", true, false),
    createData("博打", true, false),
    createData("麻雀", true, true),
    createData("保険", true, null),
    createData("ばくち", true, false),
    createData("株", true, true),
    createData("FX", true, false),
    createData("借金", true, true),
    createData("競馬", null, false),
    createData("競輪", null, false),
    createData("競艇", null, false),
  ];
  
  const ryonanamerows = [
    createData("死亡", true, true),
    createData("自殺", true, true),
    createData("殺人", true, true),
    createData("流血", true, true),
    createData("人体破壊", true, true),
    createData("手術", true, true),
    createData("人体の切断", true, true),
    createData("窒息", true, true),
    createData("犯罪行為", null, true)
  ];

  const sexualorgannamerows = [createData("特に規制無し", true, true)];

  const otherrows = [
    createData("歴史上の人物でない実在する人物", false, false),
    createData("実在する団体", false, false),
    createData("実在するサービス", false, false),
    createData("実在する商標", false, false),
    createData("たばこ", true, true),
    createData("アルコール", true, true),
    createData("実在する薬品名", true, true)
  ];

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        ガイドライン
      </Typography>
      <Typography variant="h4" gutterBottom>
        入稿データについて
      </Typography>
      <Typography variant="h5" gutterBottom>
        表現規制
      </Typography>
      <Typography variant="body1" gutterBottom>
        <Typography variant="h6" gutterBottom>
          人種表現
        </Typography>
        <Typography variant="body1" gutterBottom>
        問題になりやすい、またこちらで問題の閾を把握するのが困難なため黒人などの言葉はNGです。
        使いたい場合は褐色の肌、透き通るような白など肌の色で表現してください。
        アメリカの作品などは肌の色をカラフルにしているため、色の表現は規制に引っ掛かりづらいのです。
        </Typography>
        <TableContainer component={Paper} gutterBottom>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>人種表現</TableCell>
                <TableCell align="right">許可されているかどうか</TableCell>
                <TableCell align="right">サークルの方針</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {racerows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.permited === null
                      ? "Case by case"
                      : row.permited
                      ? "Yes"
                      : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {row.mypolicy === null
                      ? "Case by case"
                      : row.mypolicy
                      ? "Yes"
                      : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" gutterBottom>
          国名
        </Typography>
        <Typography variant="body1" gutterBottom>
        一部の国はNGになっております。こちらでルールを把握することが困難なためにグレーゾーンのものは、NGとさせておきます。
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>国名</TableCell>
                <TableCell align="right">許可されているかどうか</TableCell>
                <TableCell align="right">サークルの方針</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countrynamerows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.permited === null
                      ? "Case by case"
                      : row.permited
                      ? "Yes"
                      : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {row.mypolicy === null
                      ? "Case by case"
                      : row.mypolicy
                      ? "Yes"
                      : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" gutterBottom>
          地名
        </Typography>
        <Typography variant="body1" gutterBottom>
        具体的すぎるとNGになります。
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
                <TableCell align="right">許可されているかどうか</TableCell>
                <TableCell align="right">サークルの方針</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {placenamerows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.permited === null
                      ? "Case by case"
                      : row.permited
                      ? "Yes"
                      : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {row.mypolicy === null
                      ? "Case by case"
                      : row.mypolicy
                      ? "Yes"
                      : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" gutterBottom>
          シンボル
        </Typography>
        <Typography variant="body1" gutterBottom>
        金融,ギャンブル系については当サークルは厳しめに設定されております。
        これは、青少年が金融関係の知識を持たないため社会に出るためです。
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
                <TableCell align="right">許可されているかどうか</TableCell>
                <TableCell align="right">サークルの方針</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {placesymbolnamerows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.permited === null
                      ? "Case by case"
                      : row.permited
                      ? "Yes"
                      : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {row.mypolicy === null
                      ? "Case by case"
                      : row.mypolicy
                      ? "Yes"
                      : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" gutterBottom>
          宗教
        </Typography>
        <Typography variant="body1" gutterBottom>
        精神、宗教の自由に反する可能性が高いためNGです。
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
                <TableCell align="right">許可されているかどうか</TableCell>
                <TableCell align="right">サークルの方針</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {regionnamerows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.permited === null
                      ? "Case by case"
                      : row.permited
                      ? "Yes"
                      : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {row.mypolicy === null
                      ? "Case by case"
                      : row.mypolicy
                      ? "Yes"
                      : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" gutterBottom>
          侮辱
        </Typography>
        <Typography variant="body1" gutterBottom>
        下には無くても特定の病気についてはNGです。
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
                <TableCell align="right">許可されているかどうか</TableCell>
                <TableCell align="right">サークルの方針</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {insultnamerows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.permited === null
                      ? "Case by case"
                      : row.permited
                      ? "Yes"
                      : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {row.mypolicy === null
                      ? "Case by case"
                      : row.mypolicy
                      ? "Yes"
                      : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" gutterBottom>
          年齢
        </Typography>
        <Typography variant="body1" gutterBottom>
        近年は厳し目になっています。
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
                <TableCell align="right">許可されているかどうか</TableCell>
                <TableCell align="right">サークルの方針</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {agenamerrows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.permited === null
                      ? "Case by case"
                      : row.permited
                      ? "Yes"
                      : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {row.mypolicy === null
                      ? "Case by case"
                      : row.mypolicy
                      ? "Yes"
                      : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" gutterBottom>
          スカトロ
        </Typography><Typography variant="body1" gutterBottom>
        スカトロについての規制です。
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
                <TableCell align="right">許可されているかどうか</TableCell>
                <TableCell align="right">サークルの方針</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scatologynamerows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.permited === null
                      ? "Case by case"
                      : row.permited
                      ? "Yes"
                      : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {row.mypolicy === null
                      ? "Case by case"
                      : row.mypolicy
                      ? "Yes"
                      : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" gutterBottom>
          金融、ギャンブル
        </Typography>
        <Typography variant="body1" gutterBottom>
        金融,ギャンブル系については当サークルは厳しめに設定されております。
        これは日本では青少年が金融関係の知識を持たないため社会に出るためです。
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
                <TableCell align="right">許可されているかどうか</TableCell>
                <TableCell align="right">サークルの方針</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {financenamerows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.permited === null
                      ? "Case by case"
                      : row.permited
                      ? "Yes"
                      : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {row.mypolicy === null
                      ? "Case by case"
                      : row.mypolicy
                      ? "Yes"
                      : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" gutterBottom>
          リョナ
        </Typography>
        <Typography variant="body1" gutterBottom>
        リョナ作品を作る時の規制です。
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
                <TableCell align="right">許可されているかどうか</TableCell>
                <TableCell align="right">サークルの方針</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ryonanamerows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.permited === null
                      ? "Case by case"
                      : row.permited
                      ? "Yes"
                      : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {row.mypolicy === null
                      ? "Case by case"
                      : row.mypolicy
                      ? "Yes"
                      : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" gutterBottom>
          性器
        </Typography>
        <Typography variant="body1" gutterBottom>
        性器表現の縛りはありません。 どのような表現方法でもOKです。
        また、伏せ字は不要です。 「ち●こ」といった伏せ字は一切不要です。
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
                <TableCell align="right">許可されているかどうか</TableCell>
                <TableCell align="right">サークルの方針</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sexualorgannamerows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.permited === null
                      ? "Case by case"
                      : row.permited
                      ? "Yes"
                      : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {row.mypolicy === null
                      ? "Case by case"
                      : row.mypolicy
                      ? "Yes"
                      : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>
      <Typography variant="h6" gutterBottom>
          その他の表現規制
      </Typography>
      <Typography variant="body1" gutterBottom>
      個人・団体に迷惑をかける恐れがあるものはNGです。
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell align="right">許可されているかどうか</TableCell>
              <TableCell align="right">サークルの方針</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {otherrows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {row.permited === null
                    ? "Case by case"
                    : row.permited
                    ? "Yes"
                    : "No"}
                </TableCell>
                <TableCell align="right">
                  {" "}
                  {row.mypolicy === null
                    ? "Case by case"
                    : row.mypolicy
                    ? "Yes"
                    : "No"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <Paper component="ul">
        <ListItem>
        <Chip size="small" label="シナリオライター様向けガイドライン" component="a" href="/guideline/doujin/scenariowriter/" clickable />
        </ListItem>
      </Paper>
    </div>
  );
}
