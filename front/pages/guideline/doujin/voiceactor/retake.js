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

export default function GuidelineVoiceActorRetakePage() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        ガイドライン
      </Typography>
      <Typography variant="h4" gutterBottom>
        入稿データについて
      </Typography>
      <Typography variant="h5" gutterBottom>
        リテイク
      </Typography>
      ■ リテイクになるケース　原則無償でリテイクをお願いします
      １）セリフが足りない場合 ２）あきらかな読み間違い ■
      リテイクになる確率が高いケース　原則無償でリテイクをお願いします
      １）セリフ中にノイズがある場合（生活音、マイクを動かす音、マイクに息を吹きかける音）
      ２）音声が割れている場合（バリバリ・ブツ音、ハウリング、ヒスノイズ等）
      ３）セリフがブツ切りされている場合
      ４）音声が吹っ切れている（声が割れる）個所があまりにも多い場合(2014.05.03追加)
      音声収録中に、手がマイクやコード等にあたると、マイクに「コッ」というノイズが入ってしまいます。このようなノイズがないようにお願いいたします。
      ※気にならない程度の小さな音の場合は、リテイクしません。
      音声収録中に、マイクに直接息を吹きかけることで、マイクに「ザザッ」というノイズが入ります。「風防」「ウィンドシールド」等を用いても、たまにこの現象が発生しますので気をつけてください。
      ※気にならない程度の小さな音の場合は、リテイクしません。
      ヒスノイズとは、質の悪いマイクなどがよく発生させる「シー」や「ジー」といったノイズです。多少でしたらリテイク対象になりませんが、耳障りになるレベルで入っていた場合は、リテイク対象となります。
      比較的多いのが、生活音、環境音が入ることです。「自動車が走り抜ける音」「遠くできこえるピピピピというアラーム音」「犬や猫、カラスなどの鳴き声」「工事音」「ごはんできたわよー、ちょっとママ！収録中は声かけないでって言ってるじゃない！という声」等、微かに残ることがありますので、気をつけて下さい。
      なお、セリフではない部分のノイズは全く問題ございませんのでご安心下さい。
      例）収録が全部終った後で「お疲れ様でしたー」の声。セリフとセリフの間のマイクを触る音等は問題ないです。
      音声が吹っ切れている（声が割れる）と、どんなにボリュームを下げても耳障りになりがちです。
      激しい喘ぎ声や叫び声を収録する際に特に注意してください。
      多少はあってもかまいませんが、あまりにも多い場合は音声作品として使用できません。
      ふっきれ ■
      リテイクになりにくいケース　有償でリテイクをお願いすることが多いですが、場合によっては無料でご相談させていただくこともあります
      １）演技がイメージと違う ２）リップノイズ
      ３）身体的なノイズ（喉が鳴る、(マイクにかからない)呼吸音、鼻からの息を吸う音、息が続かない事による呼吸の乱れ）
      ４）漢字に読み仮名がついていなかったときの漢字の読み間違い
      基本的にリップノイズは許容範囲です。身体的なノイズに関してもまずリテイクすることはありません。
      よほど雑音として気になるレベルでなければ、リテイクしません。
      「演技が違う」「表現が違う」という場合、よほどのことがない限りリテイクしません。ですが、どうしても再収録をお願いするときは、相談させて下さい。基本的に有償でお願いします。
      当サークルでは、難しい漢字や読み方が複数ある漢字については必ず「読み仮名」を台本に付けます。
      もし「読み仮名」がなく、漢字を読み間違えた場合は、責任は台本を作った当サークルにあると考えておりますので、その場合の読み直しは原則有償でリテイクをお願いとなります。
      ですが、ほんのわずかな修正で「何かのついで」に一緒に修正が可能など、声優様のお手間を取ることが少ない場合は、大変申し訳ありませんが、無償でご相談させていただく場合もございます。
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
