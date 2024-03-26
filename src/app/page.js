import { Raleway } from "next/font/google";
import {
  CalendarIcon,
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";

export const metadata = {
  title: "Vishal Biswas | About me",
};

const mainFont = Raleway({ subsets: ["latin"] });

function Title({ children }) {
  return <h1 className="text-3xl">{...children}</h1>;
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl mb-1 border-b-2 border-purple-300 first-letter:font-semibold">
      {...children}
    </h2>
  );
}

function ContentTitle({ children }) {
  return <h3 className="text-xl font-bold">{...children}</h3>;
}

function ProgressBar({ filled, name, experience, children }) {
  const percent = filled * 100 + "%";
  return (
    <div className="relative text-sm mb-1">
      <div
        className="rounded-sm bg-purple-300 absolute h-full"
        style={{ width: percent }}
      ></div>
      <div className="relative px-2 py-1 leading-none flex">
        <span className="font-bold">{name}</span>
        <span className="ml-auto">{experience}</span>
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full bg-purple-300 py-1 px-2 text-sm inline-block mr-1 mb-1 leading-none">
      {...children}
    </span>
  );
}

function Calendar({ children, ...props }) {
  return (
    <p {...props}>
      <CalendarIcon className="h-5 w-5 text-purple-300 inline-block mr-1" />
      {...children}
    </p>
  );
}

function Website({ children, className, ...props }) {
  return (
    <a className={clsx("block", className)} target="_blank" {...props}>
      <LinkIcon className="h-5 w-5 text-purple-300 inline-block mr-1" />
      {...children}
    </a>
  );
}

function Logo({ name, alt }) {
  return (
    <Image
      src={"/logos/" + name}
      alt={alt}
      width={50}
      height={50}
      className="m-2"
      title={alt}
    />
  );
}

export default function Home() {
  return (
    <main
      className={clsx(
        "min-h-screen block sm:flex items-stretch max-w-7xl mx-auto",
        mainFont.className
      )}
    >
      <div className="sm:w-60 flex-shrink-0 border-r p-4 flex flex-col print:py-0">
        <Image src="/profile_pic.jpg" width={200} height={200} alt="Image of Vishal Biswas" className="mb-3 mx-auto rounded-full w-1/2 sm:w-2/3 h-auto" />
        <Title>Vishal Biswas</Title>
        <p>Full-stack Developer</p>

        <a href="mailto:vshlbiswas@ymail.com" className="mt-3 block">
          <EnvelopeIcon className="h-5 w-5 text-purple-300 inline-block mr-1" />
          vshlbiswas@ymail.com
        </a>
        <a href="tel:+918286668051" className="block">
          <PhoneIcon className="h-5 w-5 text-purple-300 inline-block mr-1" />
          8286668051
        </a>

        <div className="mt-5">
          <SectionTitle>Skills</SectionTitle>
          <ProgressBar
            filled={1}
            name="Vue.js"
            experience="5 yrs"
          ></ProgressBar>
          <ProgressBar
            filled={1}
            name="Angular"
            experience="5 yrs"
          ></ProgressBar>
          <ProgressBar
            filled={3 / 5}
            name="NodeJS"
            experience="3 yrs"
          ></ProgressBar>
          <ProgressBar
            filled={2 / 5}
            name="React"
            experience="2 yrs"
          ></ProgressBar>
          <ProgressBar
            filled={2 / 5}
            name="Android"
            experience="2 yrs"
          ></ProgressBar>
          <ProgressBar
            filled={2 / 5}
            name="Laravel"
            experience="2 yrs"
          ></ProgressBar>
        </div>

        <div className="mt-5">
          <SectionTitle>Experience</SectionTitle>
          <div>
            <ContentTitle>Volga Infotech</ContentTitle>
            <p>Web Developer</p>
            <p>2017 - Present</p>
          </div>
        </div>

        <div className="mt-5">
          <SectionTitle>Education</SectionTitle>
          <div>
            <ContentTitle>BCA</ContentTitle>
            <p>2017</p>
            <p>YCMOU</p>
          </div>
        </div>

        <div className="mt-5 mb-5">
          <SectionTitle>Hobby projects</SectionTitle>
          <p>Part time contributor to open source projects</p>
        </div>

        <div className="mt-auto">
          <SectionTitle>Technologies</SectionTitle>
          <div className="flex justify-around flex-wrap items-center">
            <Logo name="vue.svg" alt="Vue.js" />
            <Logo name="angular.svg" alt="Angular" />
            <Logo name="react.svg" alt="React.js" />
            <Logo name="next.svg" alt="Next.js" />
            <Logo name="node.svg" alt="Node.js" />
            <Logo name="aws.svg" alt="Amazon Web Services" />
            <Logo name="firebase.svg" alt="Firebase" />
            <Logo name="python.svg" alt="Python" />
            <Logo name="wordpress.svg" alt="Wordpress" />
            <Logo name="stripe.svg" alt="Stripe" />
            <Logo name="mapbox.svg" alt="Mapbox" />
            <Logo name="usps.svg" alt="United States Postal Service" />
            <Logo name="highcharts.svg" alt="Highcharts" />
            <Logo name="google-maps.svg" alt="Google Maps" />
            <Logo name="chartjs.svg" alt="Chart.js" />
          </div>
        </div>

        <div className="mt-5 text-xs">
          <p>
            <GlobeAltIcon className="h-4 w-4 text-purple-300 inline-block mr-1" />
            Up-to-date version is available at{" "}
            <a href="https://vishalbiswas.github.io" className="text-nowrap">
              https://vishalbiswas.github.io
            </a>
          </p>
        </div>
      </div>
      <div className="w-100 p-4 print:py-0">
        <SectionTitle>Projects</SectionTitle>

        <div className="mb-3 border-b pb-3">
          <ContentTitle>Geofactor</ContentTitle>
          <div className="flex mb-1">
            <Calendar className="mr-2">2020 - Present</Calendar>
            <Website href="https://geofactor.com">geofactor.com</Website>
          </div>
          <div>
            <Badge>React</Badge>
            <Badge>Vue.js</Badge>
            <Badge>NodeJS</Badge>
            <Badge>Amazon Web Services (AWS)</Badge>
            <Badge>Python</Badge>
            <Badge>Wordpress</Badge>
            <Badge>Laravel</Badge>
          </div>
          <p className="my-2">
            A multi-channel marketing platform, powered by predictive insights,
            featuring a design studio, response analytics, and audience
            visualization capabilities.
          </p>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              Currently in the process of transitioning an existing Vue.js
              front-end app to Next.js to enhance compatibility with various 3rd
              party services.
            </li>
            <li>
              Co-hosted a Vue.js app and Next.js app on the same subdomain
              during the transitional period, ensuring seamless hand-off of
              session data.
            </li>
            <li>
              Executed diverse print, digital ads and email campaign workflows
              in Vue.js, incorporating tracking, QR-code based analytics, and an
              attribution analytics dashboard.
            </li>
            <li>
              Integrated Deck.gl into a visualization tool for rendering
              scatterplots, heatmaps, and various audience visualizations on the
              map.
            </li>
            <li>
              Enhanced a basic canvas-based Design Studio to support advanced
              features such as Variable Printing, list formatting, per-character
              formatting, and more.
            </li>
            {/* <li>Implemented a fetch-and-cache micro-service delivering USPS delivery route data for rendering on the front-end map.</li> */}
            {/* <li>Integrated with a third-party service for the creation and management of prediction models on the main backend.</li> */}
            <li>
              Developed a converter that transforms Adobe InDesign documents
              into files compatible with the platform&apos;s Design Studio.
            </li>
            <li>
              Created a converter generating packaged documents used by print
              software for large-scale print jobs.
            </li>
            <li>
              Implemented a mechanism for swiftly creating new landing pages and
              posts using Custom Field Suite.
            </li>
            {/* <li>Established jobs to interact with third-party services, for dispatching proof/print jobs and handling the creation of Informed Delivery email campaigns.</li> */}
          </ul>
        </div>

        <div className="mb-3 border-b pb-3">
          <ContentTitle>Talking Rhino</ContentTitle>
          <div className="flex mb-1">
            <Calendar className="mr-2">2020</Calendar>
            <Website href="https://talkingrhino.ai">talkingrhino.ai</Website>
          </div>
          <div>
            <Badge>Android</Badge>
            <Badge>Laravel</Badge>
            <Badge>Angular</Badge>
            <Badge>Kotlin</Badge>
            <Badge>Firebase</Badge>
          </div>
          <p className="my-2">
            A children&apos;s learning app designed to minimize screen time by
            delivering captivating stories that enhance comprehension. Our
            proprietary Kiddiction algorithm engages young minds by
            incorporating thought-provoking questions into the narrative.
          </p>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              Created a native Android app with Kotlin, enabling the seamless
              playback of stories in chapters followed by targeted questions
              related to each chapter.
            </li>
            <li>
              Devised an advanced recognition algorithm to assess the
              child&apos;s spoken words and evaluate pronunciation accuracy.
            </li>
            <li>
              Implemented a mechanism allowing teachers to connect with students
              in their classrooms, facilitating progress tracking through a bulk
              invite system.
            </li>
            <li>
              Established APIs to manage users, stories, send push
              notifications, and automate scheduled email chains through
              Sendgrid from the admin panel.
            </li>
          </ul>
        </div>

        <div className="mb-3 border-b pb-3">
          <ContentTitle>White-labeled Investment Platform</ContentTitle>
          <div className="flex mb-1">
            <Calendar>2019 - 2020</Calendar>
          </div>
          <div>
            <Badge>Angular</Badge>
            <Badge>Angular Material</Badge>
            <Badge>NativeScript</Badge>
          </div>
          <p className="my-2">
            An investment platform offering portfolio management and goal-based
            investment suggestions, recognized for its excellence through
            white-label partnerships with prominent domestic and international
            banks.
          </p>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              Engineered the core app by modularizing it into standalone
              components, allowing flexibility to assemble them based on
              specific client requirements.
            </li>
            <li>
              Leveraged Highcharts to deploy diverse graph views showcasing user
              investment portfolios and fund performance.
            </li>
            <li>
              Led the development of a comprehensive investment workflow on the
              Android app, enabling users to seamlessly navigate from selecting
              a mutual fund and analyzing its breakdown and performance to
              setting up mandates on the FPX payment provider.
            </li>
          </ul>
        </div>

        <div className="mb-3 border-b pb-3">
          <ContentTitle>PICKL</ContentTitle>
          <div className="flex mb-1">
            <Calendar className="mr-2">2018 - 2019</Calendar>
            <Website href="https://pickl.pro">pickl.pro</Website>
          </div>
          <div>
            <Badge>Vue.js</Badge>
            <Badge>Laravel</Badge>
          </div>
          <p className="my-2">A gamified brand engagement platform.</p>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              Orchestrated the brand workflow, facilitating the creation of
              &quot;pickls&quot; (tasks), reviewing completed pickls, and
              rewarding users with offers.
            </li>
            {/* <li>Streamlined the payment flow for subscription tiers using Stripe.</li> */}
            <li>
              Engineered an analytics dashboard featuring comprehensive metrics
              on revenue and engagement.
            </li>
            <li>
              Developed an impersonation capability, empowering the admin to
              execute actions as any selected brand.
            </li>
          </ul>
        </div>

        <div className="mb-3">
          <ContentTitle>Alumni Alliances</ContentTitle>
          <div className="flex mb-1">
            <Calendar className="mr-2">2018</Calendar>
            <Website href="https://alumnialliances.com">
              alumnialliances.com
            </Website>
          </div>
          <div>
            <Badge>Angular</Badge>
            <Badge>Android</Badge>
          </div>
          <p className="my-2">
            Alumni Alliances serves as an exclusive alumni network dedicated to
            US universities.
          </p>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              Strategically implemented optimizations on complex landing pages
              to elevate PageSpeed scores to 50-60 on mobiles and 90+ on
              desktops.
            </li>
            <li>
              Transformed a pre-login/landing page application into Angular
              Universal (SSR), enhancing SEO performance significantly.
            </li>
            <li>
              Innovated various objective-based post formats for job searching,
              event management, etc., incorporating tailored filtering options
              for all post types.
            </li>
            <li>
              Spearheaded the development of a Display Ads platform, enabling
              the display of ads on the user-facing app. Additionally, designed
              and implemented functionality for creating, submitting, and
              approving ads through the admin panel.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
