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

export default function IndexPage() {
  return (
    <div>
      <Link href="/guideline">ガイドライン</Link>
      <p>{stars}</p>
    </div>
  );
}

IndexPage.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page