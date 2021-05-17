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

export default function GuidelineHowtoworkPage() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        ガイドライン
      </Typography>
      <Typography variant="body1" gutterBottom>
        このガイドラインは
        <Link href="https://www.tomatama.com/guideline">
          ケチャップ味のマヨネーズ
        </Link>
        様のガイドラインを参考にしております。
      </Typography>
      <Typography variant="h4" gutterBottom>
        働き方について
      </Typography>
      <Typography variant="body1" gutterBottom>
        twitterに公開リストという形で、他の人からも見えるように参加していただきます。
        ファイルのやりとり、課題共有含めて仕事の連絡のやりとりはslackで行います。
        作品以外のことでもクリエイター様同士で自由に繋がっていただいて構いません。
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
