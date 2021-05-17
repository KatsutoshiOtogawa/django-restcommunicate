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

export default function GuidelineVoiceActorSamplePage() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        ガイドライン
      </Typography>
      <Typography variant="h4" gutterBottom>
        入稿データについて
      </Typography>
      <Typography variant="h5" gutterBottom>
        サンプルについて
      </Typography>
      サークルから指定がなければ基本的にサンプルの提出は不要です。
      サンプルの提出をサークルからお願いするときは、以下をご確認ください。
      サンプル音声について
      ・数秒で結構ですので、お渡しした台本のセリフ内から「通常会話」のシーンの声を提出してください。
      ・提出する声は、1パターンでもかまいませんが、もし可能でしたら声質を変えて3パターン提出して頂けると助かります。
      ・提出するデータは、WAV形式でもMP3形式でもどちらでもかまいません。
      ・あくまで「声質」の確認のためですので、「音質」は酷くても問題ありません。
      ※ノイズが入ったり、生活音(車の音、動物の鳴き声、床等のきしむ音)が入っていても全く問題ありません。
      ■ FAQ Q:サンプルは「喘ぎ声」とか「ちゅぱ音」とかあった方がいいの？
      A:「喘ぎ声」や「ちゅぱ音」は基本的に不要です。声質の確認に喘ぎ声は一切いりません。
      もし、喘ぎ声部分が必要な場合は、サンプル提出の依頼時に別途「シナリオのどこどこの部分の喘ぎ声サンプルがほしい」という明記を致します。
      Q:サンプルを提出するにあたって別途報酬を頂けますか？
      A:申し訳ございませんが、サンプル提出での報酬はございません。
      Q:サンプルにリテイクは発生しますか？
      A:原則として、サンプルにリテイクは発生しません。
      よほどキャライメージが違う場合のみ、相談することはありますが、滅多にございません。
      Q:台本のセリフではなくて、台本とは関係ないすでに自分が収録済みの声を送ることでサンプルにしてよいですか？
      A:申し訳ございませんが、出来る限り台本内のセリフでお願いいたします。
      どうしても厳しいという時のみ、ご相談ください。
      Q:サンプルの提出は何ワード(何秒)程度あればいいですか？ A:
      最低でも1セリフ分（3秒以上のもの）をお送りください。
      上限はございませんが、特に長い台詞を読んで頂く必要はありません。
      Q:提出したサンプルをどこかに公開したりしますか？
      A:提出頂いたサンプルは、当サークルでの声質の確認やイラスト作成でのイメージサンプル、その他作品作成に必要な場合でのみ使用し、それ以外には使用いたしません。
      提出頂いたサンプル音声を公開することは一切ございません。
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
          <Chip size="small" label="声優様向けガイドライン" component="a" href="/guideline/doujin/voiceactor/" clickable />
        </ListItem>
      </Paper>
    </div>
  );
}
