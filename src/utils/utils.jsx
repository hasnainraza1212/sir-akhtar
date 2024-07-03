import twitter from "./../assets/images/twitter.png";
import facebook from "./../assets/images/facebook.png";
import pinterest from "./../assets/images/pinterest.png";
import instagram from "./../assets/images/instagram.png";
import phone from "./../assets/images/phone.png";
import envelope from "./../assets/images/envelope.png";
import marker from "./../assets/images/marker.png";
import user from "./../assets/images/userdark.png";
import authenticatedUser from "./../assets/images/authenticatedUser.png";
import search from "./../assets/images/search.png";
import techcard1 from "./../assets/images/techcard1.jpg";
import techcard2 from "./../assets/images/techcard2.jpg";
import logout from "./../assets/images/logout.png";
import Joi from "joi";

// study space utils import
import pythonDataScience from "./../assets/images/pythonDataScience.jpg"
import fullStackDevelopment from "./../assets/images/fullStackDevelopment.jpg"
import javaBeginnerToPro from "./../assets/images/javaBeginnerToPro.jpg"
import aiLearning from "./../assets/images/aiLearning.jpg"
import machineLearning from "./../assets/images/machineLearning.jpg"





export const socialMediaHandles = [
  {
    src: twitter,
    alt: "social media handle twitter",
    link: "https://www.twitter.com/studyspace",
  },
  {
    src: facebook,
    alt: "social media handle facebook",
    link: "https://www.facebook.com/studyspace",
  },
  {
    src: pinterest,
    alt: "social media handle pinterest",
    link: "https://www.pinterest.com/studyspace",
  },
  {
    src: instagram,
    alt: "social media handle instagram",
    link: "https://www.instagram.com/studyspace",
  },
];

export const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "youtube",
    link: "/playlists",
  },
  {
    name: "courses",
    link: "/courses",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const contactData = [
  { text: "0332 3024804", src: phone },
  { text: "akhter@fuuast.edu.pk", src: envelope },
  { text: "MSC Block, Block No. 9, Gulshan-e-Iqbal, Main University Road", src: marker },
];
export const tabsArray = [
  { tabName: "Home", link: "/" },
  { tabName: "About", link: "/about" },
  { tabName: "youtube", link: "/playlists" },
  { tabName: "courses", link: "/courses" }
];

export const headerIcons = [
  {
    icon: <img src={search}></img>,
    id:"search",
    condition: (auth) => true
  },
  {
    icon: <img style={{width:"32px"}} src={user}></img>,
    id:"unauthenticated",
    condition: (auth) => !auth.authenticated
  },
  {
    icon: <img style={{width:"32px"}} src={authenticatedUser}></img>,
    id:"authenticated",
    condition: (auth) => auth.authenticated
  },
  {
    icon: <img style={{width:"32px"}} src={logout}></img>,
    id:"logout",
    condition: (auth) => auth.authenticated
  }
];

export const headerIconsConditionallyRender =(auth)=> headerIcons.filter(item=>item.condition(auth))


export const techCard = [
  {
    src:techcard1,
    title:"Discovery",
    heading:"Uncovering insights and patterns"
  },
  {
    src:techcard2,
    title:"Innovation",
    heading:" Driving progress through analysis"
  }
]



// good functions

export const pxToRem = (px) => {
  const baseFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return `{(px / baseFontSize).toFixed(2)}rem`;
  
};

const filterData = (data, value, field)=>{
  const filteredData = data.filter(item[field]===data[field])
  return filterData.length<1?[]:filteredData
}
export const joiSignUpSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
    username:Joi.string()
    .required(),
  password: Joi.string()
    .required()
    .pattern(
      new RegExp(
        '^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}":;<>,.?~\\-]).{8,}$'
      )
    )
    .messages({
      "string.pattern.base":
        "Password must contain at least 1 upper case, 1 number, 1 special character, and atmost 8 characters long.",
    }),
});

export const joiPasswordSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .required()
    .pattern(
      new RegExp(
        '^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}":;<>,.?~\\-]).{8,}$'
      )
    )
    .messages({
      "string.pattern.base":
        "Password must contain at least 1 upper case, 1 number, 1 special character, and atmost 8 characters long.",
    }),
});
export const joivalidatePassword = (details={}, state=()=>{}) => {
  const { error } = joiPasswordSchema.validate(details, { abortEarly: false });
  if (!error) return true;
  const newErrors = error.details.reduce(
    (acc, detail) => ({
      ...acc,
      [detail.path[0]]: detail.message.replace(/"/g, ""),
    }),
    {}
  );
  state(newErrors);
  return false;
}; 

export const joiValidateSignUp = (details={}, state=()=>{}) => {
  const { error } = joiSignUpSchema.validate(details, { abortEarly: false });
  if (!error) return true;
  const newErrors = error.details.reduce(
    (acc, detail) => ({
      ...acc,
      [detail.path[0]]: detail.message.replace(/"/g, ""),
    }),
    {}
  );
  state(newErrors);
  return false;
}; 

export const ValidateEmptyFields = (data={},state=()=>{} ) => {
  if (Object.keys(data).find((detail) => !data[detail])) {
    return state(true);
  }
  return state(false);
};



// study space utils
export const courses =[
  {
    "Course Title": "Mastering Python for Data Science",
    "Course Description": "Learn Python from scratch and master data analysis, visualization, and machine learning with hands-on projects.",
    "Instructor and Course Details": "By Akhtar Raza, Learn Programming Academy | Updated October 2023 | 35 total hours - 200 lectures - Advanced",
    url:pythonDataScience,
    course_id:"python"
  },
  {
    "Course Title": "Full Stack Web Development with JavaScript",
    "Course Description": "Become a full-stack developer by learning front-end and back-end JavaScript technologies, including Node.js and React.",
    "Instructor and Course Details": "By Akhtar Raza, Learn Programming Academy | Updated September 2023 | 40 total hours - 220 lectures - Intermediate",
    url:fullStackDevelopment,
    course_id:"python"

  },
  {
    "Course Title": "Java Programming: From Beginner to Expert",
    "Course Description": "Gain comprehensive knowledge of Java programming and build real-world applications with confidence.",
    "Instructor and Course Details": "By Akhtar Raza, Learn Programming Academy | Updated November 2023 | 30 total hours - 180 lectures - Intermediate",
    url:javaBeginnerToPro,
    course_id:"java"

  },
  {
    "Course Title": "Data Structures and Algorithms in C++",
    "Course Description": "Master data structures and algorithms in C++ to ace coding interviews and enhance your problem-solving skills.",
    "Instructor and Course Details": "By Akhtar Raza, Learn Programming Academy | Updated August 2023 | 25 total hours - 160 lectures - Advanced",
    url:aiLearning,
    course_id:"data-structure"

  },
  {
    "Course Title": "Introduction to Machine Learning with R",
    "Course Description": "Learn the fundamentals of machine learning and statistical modeling using R programming language.",
    "Instructor and Course Details": "By Akhtar Raza, Learn Programming Academy | Updated July 2023 | 28 total hours - 190 lectures - Intermediate",
    url:machineLearning,
    course_id:"machine-learning"

  },
]
