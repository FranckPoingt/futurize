import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Layout from "../sections/Layout";
import Image from "next/image";
import projectPic from '../assets/images/ocg-saving-the-ocean-xch7jXAaqqo-unsplash.jpg';
import ShareIcon from '@material-ui/icons/Share';

import ProgressBar from "../components/ProgressBar";
import { Button, Divider } from "@material-ui/core";
import { useEffect } from "react";
import { progress } from "../utils/progressCalculator";
import { useState } from "react";
import { formatter } from "../utils/currencyFormatter";
import MilestoneStepper from "../components/MilestoneStepper";
import { useRouter } from "next/router";
import Dialog from "../components/Dialog";
import TabBar from "../components/TabBar";

import styles from '../styles/Home.module.css';


export default function Home() {

  const collected: number = 7200;
  const goal: number = 10000;
  const [percentage, setPercentage] = useState(0);
  const router = useRouter();
  const [isDialogShown, setIsDialogShown] = useState(false);

  useEffect(() => {
    setPercentage(progress(collected, goal))

  }, []);

  const handleDonateClick = () => {
    //router.push("https://pay.testwyre.com/payment-information");
    //setIsDialogShown(true);
  fetch('/api/wyre');

  }

  const handleClose = () => {
    setIsDialogShown(false)
  }

  return (
    <Layout pageMeta={{title: 'Clean the Ocean'}}>
      <div>
        <section style={{padding: '0 2rem'}}>
          <Grid container direction='row' justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container direction="column" style={{paddingLeft: '1vw'}}>
                <Grid item>
                  <h1 style={{fontSize: '2.2rem', marginBottom: 0}}>Clean the Ocean</h1>
                </Grid>
                <Grid item style={{marginBottom: '2%'}}> 
                  <span style={{fontSize: '1.2rem'}}>The Orca Association</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction='row' alignItems="baseline" spacing={2}>
                <Grid item>
                  <h2>Status:</h2>
                </Grid>
                <Grid item>
                  <p style={{color: 'green', fontWeight: 'bold'}}>FUNDING</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
                  <ShareIcon />
            </Grid>
          </Grid>
          <Grid container direction='row'>
            <Grid item lg={5} md={5}>
              <Image src={projectPic} alt="Project Picture" width={650} height={400} className={styles.img} />
            </Grid>
            <Grid item lg={7} md={7}>
              <Grid container direction='column'>
                <Grid item>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem porro temporibus numquam harum odit itaque iusto alias tenetur minus, doloremque soluta corrupti nobis delectus et ex. Quidem, aspernatur doloribus.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem porro temporibus numquam harum odit itaque iusto alias tenetur minus, doloremque soluta corrupti nobis delectus et ex. Quidem, aspernatur doloribus.</p>
                </Grid>
                <Grid item>
                  <span style={{fontSize: '1.2rem'}}>Funds raised:</span>
                  <ProgressBar value={percentage} />
                  <span>US {formatter.format(collected)} / US {formatter.format(goal)} collected</span>
                </Grid>
                <Grid item style={{marginTop: '3vh', textAlign: 'center'}}>
                <MilestoneStepper collected={collected} />
                </Grid>
                <Grid item style={{textAlign: 'center', margin: '1vh'}}>
                  <Button variant="contained" style={{backgroundColor: 'green'}} onClick={handleDonateClick}>
                    <Typography style={{fontSize: '1.2rem'}} color="secondary" variant="button">Donate</Typography>
                  </Button>
                </Grid>     
              </Grid>
            </Grid>
          </Grid>
        </section>
        
        <section style={{marginTop: '1vh'}}>
          <Divider />
          <TabBar />
        </section>
      </div>
      {isDialogShown && <Dialog isOpen={isDialogShown} handleClose={handleClose} />}
    </Layout>
  )
}
