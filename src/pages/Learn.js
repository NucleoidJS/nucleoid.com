import Default from "../layouts/Default";
import { DiscussionEmbed } from "disqus-react";
import Markdown from "../components/Markdown";
import ReactMarkdownHeading from "react-markdown-heading";
// eslint-disable-next-line import/no-webpack-loader-syntax
import learnMD from "!!raw-loader!../markdowns/learn.md";
import { Box, Button, Grid, Paper } from "@mui/material";
import Space from "../components/Space";

function Learn() {
  return (
    <Default>
      <Grid container>
        <Grid item xs={12} lg={9}>
          <Markdown content={learnMD} />
        </Grid>
        <Space />
        <Grid container item xs={12} lg={9} justifyContent={"center"}>
          <Button
            size={"large"}
            variant={"outlined"}
            sx={{ p: 2 }}
            onClick={() =>
              window.open("https://github.com/NucleoidJS/Nucleoid", "_blank")
            }
          >
            Ask Question or Submit Issue
          </Button>
        </Grid>
        <Space />
        <Grid item xs={12} lg={9}>
          <DiscussionEmbed
            shortname="nucleoidjs"
            config={{
              identifier: "learn-1",
              title: "Nucleoid: Low-code framework for JS",
            }}
          />
        </Grid>
      </Grid>
      <Paper
        sx={{
          position: "fixed",
          top: 200,
          right: 15,
          width: 350,
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <Box sx={{ margin: 5 }}>
          Contents
          <ReactMarkdownHeading
            markdown={learnMD}
            hyperlink={true}
            ulClassName={"tocUl"}
            liClassName={"tocLi"}
            anchorClassName={"tocAnchor"}
          />
        </Box>
      </Paper>
    </Default>
  );
}

export default Learn;
