import React, { useState } from "react";
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
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

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
  form: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
  },
}));

export default function ContactformPage() {
    const classes = useStyles();
    const router = useRouter();
    const { register, errors, handleSubmit } = useForm();

    const [open, setOpen] = useState(false);

    const onSubmit = (data) => {

        setOpen(true);
        
        fetch("https://pointy-gauge.glitch.me/api/form", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(response => {
            console.log("Success:", JSON.stringify(response));
            console.log(data);
            // リダイレクト
            router.push('/');
        }).catch(error => {
            console.error("Error:", error);
        });

        setOpen(false);
    };

    return (
        <div>
            <Typography variant="h3" gutterBottom>
            コンタクトフォーム
            </Typography>
            <form className={classes.form} autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
                <Grid item xs={12} sm={6}>
                    <TextField id="name" name="name" label="お名前" inputRef={register({ required: '必須項目です。' })} />
                    {errors.name && errors.name.message}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="mail_address" name="mail_address" label="メールアドレス" inputRef={register({ required: '必須項目です。' })} />
                    {errors.mail_address && errors.mail_address.message}
                </Grid>
                <Grid item xs={12}>
                    <TextField id="subject" name="subject" label="件名" inputRef={register({ required: '必須項目です。' })}  />
                    {errors.subject && errors.subject.message}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="content"
                        name="content"
                        label="本文"
                        multiline
                        rows={4}
                        rowsMax={8}
                        inputRef={register({ required: '必須項目です。' })}
                    />
                    {errors.content && errors.content.message}
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                        type="submit"
                    >
                        送る
                    </Button>
                </Grid>
                <Backdrop open={open} >
                    <CircularProgress />
                </Backdrop>
            </form>
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
