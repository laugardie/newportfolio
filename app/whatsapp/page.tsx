import Image from "next/image";
import SectionSm from "@/components/design system/SectionSm";
import Title from "@/components/design system/Title";
import MetaProps from "@/components/MetaProp";
import Paragraph from "@/components/design system/Paragraph";
import H1 from "@/components/design system/H1";
import Quote from "@/components/design system/Quote";
import BulletedList from "@/components/design system/BulletedList";
import BulletedListItem from "@/components/design system/BulletedListItem";
import SectionXl from "@/components/design system/SectionXl";
import Caption from "@/components/design system/Caption";
import SectionMd from "@/components/design system/SectionMd";
import SectionLg from "@/components/design system/SectionLg";
import NextBack from "@/components/NextBack";

export default function Goeat() {
  return (
    <div className="relative">
      <div className="w-full h-864 relative">
        <Image
          className="sm:hidden"
          src="/assets/whatsapp-cover-mobile.png"
          fill
          alt="A screenshot of the whatsapp feature"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="hidden sm:flex"
          src="/assets/whatsapp.png"
          fill
          alt="A screenshot of the whatsapp feature"
          style={{ objectFit: "cover" }}
        />
      </div>
      <article>
        <SectionSm className="relative pt-24">
          <Title>Whatsapp Polls</Title>
          <aside className="hidden lg:flex lg:mb-8 xl:absolute xl:left-full xl:pl-20 2xl:pl-24">
            <dl className="flex flex-wrap gap-10 xl:gap-0">
              <MetaProps tag="Role" description="UX/UI Designer" />
              <MetaProps tag="Project Type" description="Feature Design" />
              <MetaProps tag="Date" description="July 8th, 2019" />
              <MetaProps tag="Duration" description="4 days" />
            </dl>
          </aside>
          <Paragraph>
            Ever found yourself using WhatsApp to coordinate plans with friends
            and getting stuck in the endless loop of deciding on a date? Are
            those group chats flooded with scattered information and options
            that often get lost? If you{"'"}ve nodded in agreement, then it{"'"}
            s time to introduce the solution: <i>WhatsApp Polls</i>.
          </Paragraph>
          <Paragraph>
            WhatsApp Polls emerged from a dynamic 4-day collaboration during
            Ironhack{"’"}s UX/UI Bootcamp, brought to life by myself and my
            colleague Miguel Durán Pardo. We recognized the need to streamline
            planning within WhatsApp, offering a seamless way to make decisions
            together.
          </Paragraph>
          <H1>Brief</H1>
          <Paragraph>
            Whatsapp is a messaging app founded in 2009 by Brian Acton and Jan
            Koum. It was acquired by Facebook in 2014 and it continues operating
            as an independent app.
          </Paragraph>
          <Paragraph>
            Its mission is to create a better connected world through simple,
            secure and reliable messaging. It currently has 1.5 billion users
            worldwide who send an average of 30 billion messages, daily.
          </Paragraph>
          <Paragraph>
            The goal of this project is to add a new feature based on Whatsapp’s
            users’ needs, staying in tune with the brand.
          </Paragraph>
          <Image
            src="/assets/whatsappblog1.png"
            width={0}
            height={0}
            alt="Whatsapp logo"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
          <H1>The problem</H1>
          <Quote>Navigating group decisions on WhatsApp is a challenge.</Quote>
          <Paragraph className="mb-6">
            Whatsapp is the leading messaging app in Europe. It serves as the
            primary platform for countless users to collectively reach
            decisions. Whether it{"'"}s pinpointing a plan{"'"}s date, choosing
            the next vacation destination, or selecting the perfect birthday
            gift, the app witnesses a myriad of group decisions. However, within
            this context, a host of challenges emerge:
          </Paragraph>
          <BulletedList>
            <BulletedListItem>
              The task of arranging participants becomes increasingly intricate,
              particularly in larger groups where coordination can be
              overwhelming.
            </BulletedListItem>
            <BulletedListItem>
              Amidst the flurry of messages, some users inevitably miss out on
              crucial plans or relevant details, resulting in miscommunications
              and misunderstandings.
            </BulletedListItem>
            <BulletedListItem>
              The practice of utilizing lists to monitor votes inadvertently
              contributes to confusion as previous information becomes
              susceptible to being overwritten.
            </BulletedListItem>
          </BulletedList>
          <H1>The solution</H1>
          <Paragraph>
            Our proposition entails the integration of a poll feature, aimed at
            significantly reducing user time and effort expended during the
            process of group decision-making.
          </Paragraph>
        </SectionSm>
        <SectionXl>
          <figure>
            <Image
              src="/assets/whatsappblog2.png"
              width={0}
              height={0}
              alt="A screenshot of the different screens in the feature"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption>A sneak peek of the poll feature</Caption>
          </figure>
        </SectionXl>
        <SectionSm>
          <H1>Prototype</H1>
          <Paragraph className="mb-6">
            Our initial prototype was built upon thorough research into WhatsApp
            {"'"}s branding. Subsequently, we conducted a Usability Test
            involving 5 users, which led to iterative improvements resulting in
            a second version. The key insights garnered from this testing phase
            were as follows:
          </Paragraph>
          <BulletedList>
            <BulletedListItem>
              A 100% success rate in poll creation and voting validated the
              functionality{"'"}s user-friendliness.
            </BulletedListItem>
            <BulletedListItem>
              3 out of 5 users changed their initial vote tapping on a different
              option, indicating a need for convenient voting adjustments.
            </BulletedListItem>
            <BulletedListItem>
              3 out of 5 users initially tried to find the poll feature within
              the {'"'}more{'"'} menu (three dots on the top right corner),
              suggesting a need for improved visibility.
            </BulletedListItem>
            <BulletedListItem>
              The desire to preview existing votes before casting their own was
              a common request among users.
            </BulletedListItem>
            <BulletedListItem>
              Users expressed the wish to access and manage their previous
              polls, leading to the creation of a dedicated screen for viewing,
              editing, and closing polls.
            </BulletedListItem>
            <BulletedListItem>
              Creating multi-selection polls initially posed challenges for
              users. This was addressed by implementing a switch button on the
              poll configuration screen, allowing users to toggle between single
              and multi-selection modes.
            </BulletedListItem>
            <BulletedListItem>
              A redesign of the radio button, which was inconsistent with the
              standard.
            </BulletedListItem>
          </BulletedList>
          <Paragraph>
            This feedback proved to be exceptionally valuable in refining the
            design and facilitating iterative improvements for the second
            version.
          </Paragraph>
        </SectionSm>
        <SectionMd>
          <figure>
            <Image
              src="/assets/whatsappblog3.png"
              width={0}
              height={0}
              alt="A screenshot of version 1 and version 2 of the feature"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption>
              Version 1 vs Version 2 of feature after performing a Usability
              test.
            </Caption>
          </figure>
        </SectionMd>
        <SectionSm>
          <H1>UX Blueprint</H1>
          <Paragraph>
            Our journey commenced with the creation of the UX Blueprint, a
            foundational step that played a pivotal role in shaping our
            strategy. Through careful analysis, we delineated how the design of
            this innovative feature would not only enhance customer experience
            but also deliver value to the business. This strategic blueprint
            also encompassed the identification of the tools that would guide us
            on this path, empowering us to navigate the journey efficiently and
            ultimately achieve our objectives.
          </Paragraph>
        </SectionSm>
        <SectionMd>
          <Image
            src="/assets/whatsappblog4.jpeg"
            width={0}
            height={0}
            alt="UX Strategy blueprint"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </SectionMd>
        <SectionSm>
          <H1>Competitive Analysis</H1>
          <Paragraph>
            Our approach included an exploration of the messaging and survey app
            landscape, scrutinizing the array of features they provided. This
            proactive investigation paved the way for us to identify avenues for
            differentiation and innovation, aiming to set our product apart from
            direct competitors.
          </Paragraph>
          <Paragraph>
            In this analysis, we observed that major players like Facebook
            Messenger, Telegram, and Line have already incorporated the poll
            feature into their applications. This discovery illuminated a gap
            for WhatsApp, as it presently offers fewer functionalities to its
            user base. Recognizing this, we identified the addition of the poll
            feature as an opportunity to both entice new users and enhance
            overall user satisfaction.
          </Paragraph>
          <Paragraph>
            To stand out from our competitors, our feature needed to excel in
            user-friendliness, clarity, and flexibility.
          </Paragraph>
          <H1>User flow</H1>
          <Paragraph>
            We meticulously crafted a user flow to pinpoint the primary pain
            points that arise when making group decisions.
          </Paragraph>
          <Paragraph className="mb-6">
            Upon dissecting the existing user flow, several areas of friction
            surfaced:
          </Paragraph>
          <BulletedList>
            <BulletedListItem>
              Users often encounter difficulties when attempting to create lists
              with multiple options as space is limited.
            </BulletedListItem>
            <BulletedListItem>
              The necessity to copy and paste lists elevates the risk of
              information loss.
            </BulletedListItem>
            <BulletedListItem>
              The current setup lacks the ability for users to discern whether
              everyone has responded or identify participants who are yet to
              contribute, fostering uncertainty and hindering efficient
              decision-making.
            </BulletedListItem>
          </BulletedList>
        </SectionSm>
        <SectionLg className="my-12">
          <Image
            src="/assets/whatsappblog5.png"
            width={0}
            height={0}
            alt="USer flow"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </SectionLg>
        <SectionSm>
          <Paragraph>
            In the subsequent user flow, the integration of the poll feature is
            distinctly evident. Notably, the user{"'"}s journey becomes notably
            streamlined, with fewer steps required, rendering the task notably
            simpler and more convenient.
          </Paragraph>
        </SectionSm>
        <SectionLg>
          <Image
            src="/assets/whatsappblog6.png"
            width={0}
            height={0}
            alt="USer flow with polls feature"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </SectionLg>
        <SectionSm>
          <H1>Brand Analysis</H1>
          <Paragraph>
            To integrate this novel feature while maintaining harmony with the
            existing app, we embarked on a research journey delving into
            WhatsApp
            {"'"}s mission, philosophy, and design principles.
          </Paragraph>
          <Quote>
            simple, personal, connection – <i>Whatsapp</i>
          </Quote>
          <Paragraph>
            WhatsApp{"'"}s mission revolves around crafting a messaging platform
            that{"'"}s simple, secure and reiable – a space where users can
            seamlessly connect with friends and family across the globe.
          </Paragraph>
          <Paragraph>
            The design is simple and easy to use, so Whatsapp doesn{"’"}t need
            to explain any of its features to its users.
          </Paragraph>
          <Paragraph>
            The tone is plain and simple. They use a direct language to describe
            the actions the user can perform. It does not include anything that
            can cause distraction or confusion and they only use enough text to
            explain messages.
          </Paragraph>
          <Paragraph>
            Their primary color is green –<i>Whatsapp green</i>– which they use
            to evoke a friendly and calm feeling. They also use a different set
            of colors to complement it but with caution.
          </Paragraph>
          <Image
            src="/assets/whatsappblog7.png"
            width={0}
            height={0}
            alt="Color palette"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
            className="pb-10"
          />
          <Paragraph>
            The typeface used in their chat is Helvetica Neue, which complements
            the brand personality. Helvetica Neue is a clear and accesible
            typeface.
          </Paragraph>
          <Image
            src="/assets/whatsappblog8.png"
            width={0}
            height={0}
            alt="Typography"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
            className="pb-10"
          />
          <Paragraph>
            Buttons are circular and they drop a shadow effect adding emphasis.
          </Paragraph>
          <Image
            src="/assets/whatsappblog9.png"
            width={0}
            height={0}
            alt="Buttons"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            sizes="100vw"
          />
          <Paragraph className="mb-6 mt-10">
            In summary, our design should be grounded in these three core
            principles:
          </Paragraph>
          <BulletedList>
            <BulletedListItem>
              The user interface should seamlessly blend with the user{"'"}s
              device, particularly adhering to Android design principles in our
              case.
            </BulletedListItem>
            <BulletedListItem>
              The feature{"'"}s design must prioritize simplicity.
            </BulletedListItem>
            <BulletedListItem>The design should be intuitive.</BulletedListItem>
          </BulletedList>
          <H1>Navigating the feature</H1>
          <BulletedList>
            <BulletedListItem>
              When a user enters a group chat, they can access additional
              options by tapping the top right icon, and there they will find
              the {'"'}
              Group{"'"}s Polls{'"'} feature [1].
            </BulletedListItem>
            <BulletedListItem>
              Upon entering this new screen, users can view existing polls and
              create new ones by tapping the add icon. Alternatively, they can
              initiate a new poll creation process by tapping on the group name
              displayed in the top bar, which leads them to the group{"'"}s
              details, where they can select {'"'}Create New Poll{'"'} [2].
            </BulletedListItem>
          </BulletedList>
        </SectionSm>
        <SectionMd>
          <figure>
            <Image
              src="/assets/whatsappblog10.png"
              width={0}
              height={0}
              alt="Group’s polls and create new poll screens "
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption className="pb-10">
              [1]🇬🇧Group’s polls: 🇪🇸Encuestas del grupo [2] 🇬🇧Create new poll:
              🇪🇸Crear nueva encuesta
            </Caption>
          </figure>
        </SectionMd>
        <SectionSm>
          <BulletedList>
            <BulletedListItem>
              To create a new poll, the user has to fill the title and options.
              Options can be rearrange by dragging them. They can also choose
              between multiple/single choice [3] and anonymous/public votes [4].
            </BulletedListItem>
          </BulletedList>
        </SectionSm>
        <SectionMd>
          <figure>
            <Image
              src="/assets/whatsappblog11.png"
              width={0}
              height={0}
              alt="Multiple choice and anonymous vote"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption className="pb-10">
              [3] 🇬🇧Multiple choice: 🇪🇸Respuesta Múltiple [4] 🇬🇧Anonymous vote:
              🇪🇸Encuesta anónima
            </Caption>
          </figure>
        </SectionMd>
        <SectionSm>
          <BulletedList>
            <BulletedListItem>
              Once the poll is published, the user can vote and edit their
              choice by tapping on a different option.
            </BulletedListItem>
            <BulletedListItem>
              The user can see a list of polls inside {"“"}Group{"’"}s polls
              {"”"} [5], active ones with a white background and inactive ones
              with a grey background.
            </BulletedListItem>
          </BulletedList>
        </SectionSm>
        <SectionMd>
          <figure>
            <Image
              src="/assets/whatsappblog12.png"
              width={0}
              height={0}
              alt="Group's poll feature"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              sizes="100vw"
            />
            <Caption className="pb-10">
              [5] 🇬🇧Group’s polls: 🇪🇸Encuestas del grupo
            </Caption>
          </figure>
        </SectionMd>
        <SectionSm>
          <Paragraph>
            Presented below is the latest iteration of the prototype,
            encompassing the complete user journey—from the creation of a poll,
            selection of an option, to the comprehensive overview of the poll
            {"'"}s list and status.
          </Paragraph>
          <video className="mx-auto w-30 h-30" controls>
            <source src="/assets/whatsappblog13.mp4" type="video/mp4" />
          </video>
          <H1>Next steps</H1>
          <Paragraph>
            While our current prototype has reached a commendable stage,
            acknowledging that perfection is a continuous pursuit, we are poised
            to conduct another round of usability testing involving 5
            individuals. This iterative approach allows us to fine-tune the
            design, ensuring that our product evolves in harmony with user needs
            and expectations.
          </Paragraph>
          <Paragraph className="mb-6">
            Other feature we think is worth exploring are:
          </Paragraph>
          <BulletedList>
            <BulletedListItem>
              <b>Pending Votes Visibility:</b> Enabling users to identify who
              within the group is yet to cast their vote.
            </BulletedListItem>
            <BulletedListItem>
              <b>Expiry Date and Reminders:</b> Introducing the ability to set
              an expiration date for polls and sending reminders to participants
              who have yet to vote.
            </BulletedListItem>
            <BulletedListItem>
              <b>Enhance the Visual Design</b>
            </BulletedListItem>
            <BulletedListItem>
              <b>Improved Vote Display:</b> Seeking innovative methods to better
              display the quantity of votes received for each option.
            </BulletedListItem>
          </BulletedList>
        </SectionSm>
      </article>
      <NextBack href={"/gumroad"} next={"Gumroad"} />
    </div>
  );
}
