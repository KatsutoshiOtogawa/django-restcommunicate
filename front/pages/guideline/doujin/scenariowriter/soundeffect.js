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

export default function GuidelineScenariowriterSoundeffectPage() {
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
        ■ 「音声作品」シナリオの注意点
        ◎通常のラノベやゲームシナリオと異なり「ト書き」は無く、ほぼ台詞のみでストーリーを進めます。
        駄目な例） 公園に二人の少女がやってきた A「おねーちゃんついたよ！」
        B「もう待ってよ、A」
        上記の場合「公園に二人の少女がやってきた」というト書き部分がつかえません。
        セリフのみで「公園に着いた」と言うことを表現しなければいけません。
        A「おねーちゃん公園についたよ！」 B「もうまってよ、A」
        ◎「台詞」のみで、試聴者にイメージを与える必要があります。
        例えば、以下の台詞の場合 A「ほら、どうだ、ここが気持ちいいだろ？」
        B「いやぁ！きもちい！」
        この場合、どこをどう責められているのかがわかりません。 例えば、
        A「ほら、どうだ、クリをつまむと気持ちいいだろ？」
        B「いやぁ！きもちい！」 とか A「ほら、どうだ、ここが気持ちいいだろ？」
        B「いやぁ！クリをつままないでぇ！」
        といったように、どのようなことをされているのかを試聴者にわかるように表現してください。
        ■ 音声作品の種類について 音声作品は大きく3種類あります。
        (1)音声ドラマシナリオ (2)視聴者参加型シナリオ (3)催眠シナリオ
        当サークルから依頼しているのが上記のどれにあたるかで、シナリオの書き方が変わります。
        (1)音声ドラマシナリオについて ボイスドラマのことです。
        音声でストーリーが進みます。 シナリオ内に試聴者は参加しません。
        (2)視聴者参加型シナリオについて
        ボイスドラマとの違いは、「試聴者」を登場人物として扱うことです。
        試聴者は、声の相手が目の前にいることを想像して試聴を楽しみます。
        例えば、添い寝、耳かき、SM命令など、試聴者と疑似コミュニケーションをとります。
        (3)催眠シナリオについて
        試聴者に音声を利用して催眠をかけ、試聴者を気持ちよくする目的のシナリオです。
        当サークルではあまり扱いませんが……
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
