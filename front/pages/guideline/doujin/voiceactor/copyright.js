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
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function GuidelineVoiceActorCopyrightPage() {
  const classes = useStyles();
  // const [chipData, setChipData] = React.useState([
  //   { key: 0, label: 'Angular' },
  //   { key: 1, label: 'jQuery' },
  //   { key: 2, label: 'Polymer' },
  //   { key: 3, label: 'React' },
  //   { key: 4, label: 'Vue.js' },
  // ]);

  return (
    <div className='root'>
      <Typography variant="h3" gutterBottom>
        ガイドライン
      </Typography>
      <Typography variant="h4" gutterBottom>
        入稿データについて
      </Typography>
      <Typography variant="h5" gutterBottom>
        著作権
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        <List>
          <ListItem>
            <ListItemText>
            音声の著作権は、音声を収録した声優様にあります。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
            納品いただいた音声の使用権は、当サークルにあります。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
            当サークルは、納品いただいた音声を販売及び一般配布、広告活動する目的で、音声を加工・編集・分割・結合し、公開します。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
            納品いただいた音声は、声優様にお伝えした作品で使用します。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
            納品いただいた音声を声優様にお伝えした以外の作品で使用する際は、声優様に確認のうえ使用します。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
            声優様は当サークルに納品した音声を、当サークルに連絡することなく、販売や公開、譲渡、他の作品での利用等しないで下さい。<br />
            例）「女戦士の陵辱」作品で音声を収録し、やがて続編の「女戦士の陵辱２」の作品を作ることが決まったケース等で、「女戦士の陵辱」で使用した音声の一部を流用する場合等は、必ず声優様に確認のうえで使用いたします。
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
            音声を納品いただいた後に、「公開停止」等の要求をすることはご遠慮下さい。
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
