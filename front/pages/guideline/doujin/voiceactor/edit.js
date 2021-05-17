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

export default function GuidelineVoiceActorEditPage() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        ガイドライン
      </Typography>
      <Typography variant="h4" gutterBottom>
        入稿データについて
      </Typography>
      <Typography variant="h5" gutterBottom>
        音声編集
      </Typography>
      <Typography variant="body1" gutterBottom>
        音声編集は、当サークルにて行います。
        そのため、読み間違い訂正音声のカットやセリフ間隔の調整などは当サークルにて行いますので、声優様による音声編集は必要ありません。
        ※不要音声部分のカットをあらかじめして頂けますとすごく助かりますが必須ではありません。
        以下に示す内容は、音声編集をしないで生音声を納品する場合、いわゆる「とりっぱなし音声」での、注意点です。
        <List>
          <ListItem>
            <ListItemText>
              例）以下のセリフがあったとします。
              <br />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              「今日はとてもいい天気ね」
              <br />
              「こんな日は仕事を忘れて遊びに行きたいわ」
              <br />
              「ねぇ、仕事サボっちゃおうか」
              <br />
            </ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText>
              以下の納品はOKです　セリフとセリフの間に咳払いや休憩等の間を開ける
              <br />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              「今日はとてもいい天気ね」
              <br />
              「こんな日は仕事を忘れて遊びに行きたいわ」 （無音）
              <br />
              （咳払い）
              <br />
              （無音）
              <br />
              「ねぇ、仕事サボっちゃおうか」
              <br />
            </ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText>
              ×以下の納品はNGです　セリフ内の途中の文字で咳払いや休憩等の間を開ける
              ■パターン１
              <br />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              「今日はとてもいい天気ね」
              <br />
              「こんな日は仕事を」（咳払い）「忘れて遊びに行きたいわ」
              <br />
              「ねぇ、仕事サボっちゃおうか」
              <br />
            </ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText>
              ■パターン２
              <br />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              「今日はとてもいい天気ね」
              <br />
              「こんな日は仕事を」（咳払い）「仕事を忘れて遊びに行きたいわ」
              <br />
              「ねぇ、仕事サボっちゃおうか」
              <br />
            </ListItemText>
          </ListItem>
        </List>
        上記のような、セリフの途中で咳払い等をしてしまった場合は、以下に記したように訂正をして、セリフのひとつ以上前の開始部分から読み直してください。
        <List>
          <ListItem>
            <ListItemText>
              ○以下の納品はOKです　読み訂正のために、訂正することがわかる言葉を入れる
              <br />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              「今日はとてもいい天気ね」
              <br />
              「こんな日は仕事をわしゅ・・・」
              <br />
              （無音）
              <br />
              「テイクツー」
              <br />
              （無音）
              <br />
              「こんな日は仕事を忘れて遊びに行きたいわ」
              <br />
              「ねぇ、仕事サボっちゃおうか」
              <br />
            </ListItemText>
          </ListItem>
        </List>
        ※訂正の声は「テイクツー」である必要はありません。
        <br />
        「やりなおしまーす」「もう一度」「リテイク」など、読み直すことがわかるセリフを一言入れて頂ければOKです。
        <List>
          <ListItem>
            <ListItemText>
              ×以下の納品はNGです　読み訂正のために、訂正することがわかる言葉を入れない
              <br />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              「「今日はとてもいい天気ね」
              <br />
              「こんな日は仕事をわしゅ・・・」
              <br />
              「こんな日は仕事を忘れて遊びに行きたいわ」
              <br />
              「ねぇ、仕事サボっちゃおうか」
              <br />
            </ListItemText>
          </ListItem>
        </List>
        長く喘ぎ声が続くセリフ等で読み直しをするときは、
        「どこから始めたのかわかりにくい」場合があります。 そのときは、
        「○ページの○行目から」「○ページの○○○のセリフから」「○ページの○○○のセリフの後から」等、
        わかるように入れて頂けると助かります。
        ※基本的にはここまで丁寧に読み直しの場所を言っていただく必要はありません。
        　わかりにくいセリフの時のみで結構です。
      </Typography>
      <Divider />
      <Paper component="ul">
        <ListItem>
          <Chip size="small" label="声優様向けガイドライン" component="a" href="/guideline/doujin/voiceactor/" clickable />
        </ListItem>
      </Paper>
    </div>
  );
}
