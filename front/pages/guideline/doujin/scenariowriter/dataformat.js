import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500
  }
});

export default function GuidelineScenariowriterDataformatPage() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        ガイドライン
      </Typography>
      <Typography variant="h4" gutterBottom>
        入稿データについて
      </Typography>
      <Typography variant="h5" gutterBottom>
        ファイル形式　納品形式
      </Typography>
      <Typography variant="body1" gutterBottom>
        ■ 納品方法について
        納品方法はサークルが指定する方法で納品をお願いいたします。
        特に指定がなければ「テキストファイル形式」で納品してください。 ■
        テキストファイル納品について
        テキストファイル（文字コードutf8(Bom無し)）で納品して下さい。
        キャラ紹介があれば一緒にお願いします。
        キャラ紹介は特にフォーマットはありません。
        シナリオ本文の納品データとは別に、登場人物キャラクター紹介も簡単な文章にして納品してください。
        例） シナリオ本文.txt キャラクター紹介.txt
        ※ファイル名は自由に付けて頂いて結構です。 ■ フォームからの納品の場合
        サークルが指定するフォームから投稿してください。
      </Typography>
      <Typography variant="body1" gutterBottom>
        ■ ファイル形式 納期形式： ■ ファイルの送付
        音声ファイルサイズが重い場合は、メールで送ることが出来ません。
        ご自身のサイトにアップロードしてURLをご連絡いただくか、
        ファイアストレージや宅ファイル便等を利用して、アップロードしたURLをお知らせ下さい
        <List>
          <ListItem>
            <ListItemText>
              報酬のお支払いに関して、源泉の発行はしておりません。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              確定申告などの処理は雑収入等、住所などの記載の必要のない方法で処理をお願いいたします。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              支払いは当サークルより入稿を確認しだい、銀行振り込みになります。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              銀行振り込みの場合など、銀行に出金データが残る形での支払いの場合は領収書は不要です。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              振り込み名義は「オトガワカツトシ」です。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              その他、支払いのタイミング、方法を選択したい場合はご相談ください。
            </ListItemText>
          </ListItem>
        </List>
      </Typography>
      <Divider />
      <Paper component="ul">
        <ListItem>
        <Chip size="small" label="シナリオライター様向けガイドライン" component="a" href="/guideline/doujin/scenariowriter/" clickable />
        </ListItem>
      </Paper>
    </div>
  );
}
