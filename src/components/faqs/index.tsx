import {
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
  } from "@mui/material";
  import styles from "./index.module.scss";
  import { useState } from "react";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  
  const FAQS = (props: any) => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };
    return (
        <section id="thm-faqs" className={styles.faqsSection}>
          <Container className={styles.faqsContainer} maxWidth="xl">
            <div className={styles.faqsAccordion}>
            <Grid container spacing={2}>
                
                    
                
                {props.list.map((item: any, index: number) => (
                    <>
                    <Grid item xs={6}>
                <Accordion
                  expanded={expanded === `panel${index + 1}`}
                  key={index}
                  onChange={handleChange(`panel${index + 1}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}a-content`}
                    id={`panel${index}a-header`}
                  >
                    <Typography>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className={styles.content}
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></div>
                  </AccordionDetails>
                </Accordion>
                </Grid>
                    </>
              ))}
                </Grid>
              
            </div>
          </Container>
        </section>
    );
  };
  export default FAQS;
  