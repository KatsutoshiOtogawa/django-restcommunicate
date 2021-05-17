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

export default function GuidelineIlustratorCopyrightPage() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        ガイドライン
      </Typography>
      <Typography variant="h4" gutterBottom>
        入稿データについて
      </Typography>
      <Typography variant="h5" gutterBottom>
        著作権
      </Typography>
      シナリオの著作権は、ライター様にあります。
      納品いただいたシナリオの使用権は、当サークルにあります。
      当サークルは、納品いただいたシナリオを販売及び一般配布、広告活動する目的で、シナリオを加工・編集・分割・結合し、公開します。
      ライター様は当サークルに納品した音声を、当サークルに連絡することなく、販売や公開、譲渡、他の作品での利用等しないで下さい。
      シナリオを納品いただいた後に、「公開停止」等の要求をすることはご遠慮下さい。
      但し、内容によっては相談に応じますので、万一のときはご相談下さい。
      <Typography variant="body1" gutterBottom>
        ノーマル音声は、次の形式と同等かそれ以上、44100Hz、16bit、モノラル、wav
        バイノーラル音声は、一般的なバイノーラル環境かそれ以上 ■ ファイルの分割
        納品ファイルは、フレーズ事に分割する必要はありません。
        「章」毎に1ファイルとして納品して下さい。一章 voice1.wav,二章
        voice2.wavという形です。 シーン５.wav フリートーク.wav
        ファイル名はこちらから特に指定がない限り、voice+番号+.+拡張子(例:voice1.wav,voice2.wav
        ... 0埋めしない)という形式でお願いします。
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
          <Chip size="small" label="イラストレーター様向けガイドライン" component="a" href="/guideline/doujin/ilustrator/" clickable />
        </ListItem>
      </Paper>
    </div>
  );
}
