import { Box } from "@mui/material";
import Button from "../../Components/Button/Button";
import { aboutPagesec1Points } from "../../utils/utils";
import sir_akhtar from "./../../assets/images/sir_akhtar.png";
import ChecklistItem from "../../Components/ChecklistItem/ChecklistItem";
import TeaserBox from "../../Components/TeaserBox/TeaserBox";

const About = () => {
    return (
        <>
            <Box>
                <Box
                    sx={{
                        maxWidth: "1200px",
                        boxSizing: "border-box",
                        padding: {
                            lg: "106px 30px",
                            xs: "50px 30px",
                        },
                        margin: "auto",
                        display: "flex",
                        gap: "80px",
                        height: "100%",
                        flexDirection: {
                            md: "row",
                            xs: "column",
                        },
                    }}
                >
                    <Box
                        sx={{
                            flexGrow: "1",
                            flexShrink: "1",
                            flexBasis: {
                                md: "50%",
                                xs: "80%",
                            },
                            textAlign: "justify",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: {
                                    md: "100%",
                                    xs: "450px",
                                    sm: "500px",
                                },
                                borderRadius: "10px",
                            }}
                        >
                            <Box
                                sx={{
                                    minHeight: "100%",
                                    borderRadius: "8px",
                                    background: `url(${sir_akhtar})`,
                                    width: "100%",
                                    backgroundSize: "cover",
                                    backgroundPosition: "80%",
                                }}
                            ></Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: "1",
                            flexShrink: "1",
                            flexBasis: {
                                md: "50%",
                                xs: "100%",
                            },
                        }}
                    >
                        <TeaserBox
                            title="Meet Our Data Science Expert"
                            subHeading="Learn from a seasoned professional with a wealth of experience in both R and Python."
                            heading="Dr. Akhtar Raza"
                            text="Dr. Akhtar Raza is an Assistant Professor at the Federal Urdu University of Arts, Science and Tech with extensive experience in research and teaching. He has held positions such as Director of IT and Head of the Computer Science Department. Dr. Raza holds a PhD in Computer Science and an MSc in Statistics from the University of Karachi."
                        />
                        <Box sx={{ mt: "20px" }}>
                            {aboutPagesec1Points.map((x, i) => (
                                <ChecklistItem text={x.text} src={x.src} key={i} />
                            ))}
                        </Box>

                        <Box
                            sx={{
                                mt: {
                                    md: "40px",
                                    xs: "30px",
                                },
                            }}
                        >
                            <Button
                                text={"Discover Courses"}
                                BgColor={"#000000"}
                                hoverBgColor={"#271919"}
                                textColor="white"
                                link={"/courses"}
                            >
                                Discover More
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default About;