"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import MenuDesktop from "@/components/MenuDesktop";
import MenuPhone from "@/components/MenuPhone";
import Footer from "@/app/Footer";
import Title from "@/components/design system/Title";
import Paragraph from "@/components/design system/Paragraph";
import Quote from "@/components/design system/Quote";
import BulletedList from "@/components/design system/BulletedList";
import BulletedListItem from "@/components/design system/BulletedListItem";
import NextBack from "@/components/NextBack";

export default function WhatsappPage() {
  return (
    <div className="bg-background min-h-screen font-figtree [background-image:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:16px_16px]">
      {/* Add margin container */}
      <div className="mx-6 md:mx-12">
        <div className="mx-auto max-w-7xl border-x border-border min-h-screen">
          {/* Header */}
          <div className="w-full border-b border-border">
            <header className="lg:px-0 pr-4 pl-0">
              <div className="flex justify-between items-center">
                <Link className="cursor-pointer" href="/">
                  <div className="pl-1 hover:bg-white/70 hover:text-black"><Logo /></div>
                </Link>
                <MenuDesktop className="hidden lg:flex" />
                <MenuPhone className="flex lg:hidden" />
              </div>
            </header>
          </div>

          {/* Cover image section */}
          <div className="w-full">
            <div className="w-full aspect-[16/9] max-h-[469px]">
              <Image
                src="/assets/whatsapp.png"
                alt="WhatsApp Polls Interface"
                width={1280}
                height={720}
                className="w-full h-full"
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="border-t border-border"></div>
          </div>

          {/* Introduction section */}
          <div className="w-full">
            <div className="px-6 md:px-12 pt-16 md:pt-24 py-6">
              <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                <label className="text-base font-medium font-jetbrains-mono">CASE STUDY</label>
                <h1 className="text-5xl font-medium">
                  WhatsApp Polls<br />
                  <span className="font-cormorant italic">A new way to make group decisions</span>
                </h1>
                <Paragraph>
                  Ever found yourself using WhatsApp to coordinate plans with friends and getting stuck in the endless loop of deciding on a date? 
                  Are those group chats flooded with scattered information and options that often get lost? If you&apos;ve nodded in agreement, then it&apos;s time to introduce the solution: <span className="italic">WhatsApp Polls</span>.
                </Paragraph>
                <Paragraph>
                  WhatsApp Polls emerged from a dynamic 4-day collaboration during Ironhack&apos;s UX/UI Bootcamp, brought to life by myself and my colleague Miguel Durán Pardo. We recognized the need to streamline planning within WhatsApp, offering a seamless way to make decisions together.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="px-6 md:px-12 py-6">
              {/* Project details section */}
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Role</h3>
                  <p className="text-sm font-medium">UX/UI Designer</p>
                </div>
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Project Type</h3>
                  <p className="text-sm font-medium">Feature Design</p>
                </div>
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Date</h3>
                  <p className="text-sm font-medium">July 8th, 2019</p>
                </div>
                <div className="bg-white/70 border border-border rounded-lg p-3">
                  <h3 className="text-xs font-jetbrains-mono text-black/60 uppercase mb-1">Duration</h3>
                  <p className="text-sm font-medium">4 days</p>
                </div>
              </div>
            </div>

            {/* Main content sections */}
            <div className="pb-12 max-w-3xl mx-auto flex flex-col gap-6">
              {/* Brief section */}
              <Title>Brief</Title>
              <Paragraph>
                Whatsapp is a messaging app founded in 2009 by Brian Acton and Jan Koum. It was acquired by Facebook 
                in 2014 and it continues operating as an independent app.
              </Paragraph>
              <Paragraph>
                Its mission is to create a better connected world through simple, secure and reliable messaging. 
                It currently has 1.5 billion users worldwide who send an average of 30 billion messages, daily.
              </Paragraph>
              <Paragraph>
                The goal of this project is to add a new feature based on Whatsapp&apos;s users&apos; needs, staying in tune with the brand.
              </Paragraph>
              <Image 
                alt="Whatsapp logo" 
                loading="lazy" 
                width="0" 
                height="0" 
                decoding="async" 
                data-nimg="1" 
                src="/assets/whatsappblog1.png"
                style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                className="rounded-lg border border-border"
              />
              {/* Problem section */}
              <Title>The problem</Title>
              <Quote>
                Navigating group decisions on WhatsApp is a challenge.
              </Quote>
              <Paragraph>
                Whatsapp is the leading messaging app in Europe. It serves as the primary platform for countless users 
                to collectively reach decisions. Whether it&apos;s pinpointing a plan&apos;s date, choosing the next vacation destination, 
                or selecting the perfect birthday gift, the app witnesses a myriad of group decisions.
              </Paragraph>
              <BulletedList>
                <BulletedListItem>
                        The task of arranging participants becomes increasingly intricate, particularly in larger groups where coordination can be overwhelming.
                </BulletedListItem>
                <BulletedListItem>
                        Amidst the flurry of messages, some users inevitably miss out on crucial plans or relevant details, resulting in miscommunications and misunderstandings.
                </BulletedListItem>
                <BulletedListItem>
                        The practice of utilizing lists to monitor votes inadvertently contributes to confusion as previous information becomes susceptible to being overwritten.
                </BulletedListItem>
              </BulletedList>
              {/* Solution section */}
              <Title>The solution</Title>
              <Paragraph>
                        Our proposition entails the integration of a poll feature, aimed at significantly reducing user time and effort expended during the process of group decision-making.
              </Paragraph>
              <figure>
                        <Image 
                          alt="A screenshot of the different screens in the feature"
                          loading="lazy"
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          src="/assets/whatsappblog2.png"
                          style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                          className="rounded-lg border border-border"
                        />
                        <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                          A sneak peek of the poll feature
                        </figcaption>
              </figure>
              {/* Prototype section */}
              <Title>Prototype</Title>
              <Paragraph>
                        Our initial prototype was built upon thorough research into WhatsApp&apos;s branding. Subsequently, we conducted a Usability Test involving 5 users, which led to iterative improvements resulting in a second version. The key insights garnered from this testing phase were as follows:
              </Paragraph>
              <BulletedList>
                        <BulletedListItem>
                          A 100% success rate in poll creation and voting validated the functionality&apos;s user-friendliness.
                        </BulletedListItem>
                        <BulletedListItem>
                          3 out of 5 users changed their initial vote tapping on a different option, indicating a need for convenient voting adjustments.
                        </BulletedListItem>
                        <BulletedListItem>
                          3 out of 5 users initially tried to find the poll feature within the &ldquo;more&rdquo; menu (three dots on the top right corner), suggesting a need for improved visibility.
                        </BulletedListItem>
                        <BulletedListItem>
                          The desire to preview existing votes before casting their own was a common request among users.
                        </BulletedListItem>
                        <BulletedListItem>
                          Users expressed the wish to access and manage their previous polls, leading to the creation of a dedicated screen for viewing, editing, and closing polls.
                        </BulletedListItem>
                        <BulletedListItem>
                          Creating multi-selection polls initially posed challenges for users. This was addressed by implementing a switch button on the poll configuration screen, allowing users to toggle between single and multi-selection modes.
                        </BulletedListItem>
                        <BulletedListItem>
                          A redesign of the radio button, which was inconsistent with the standard.
                        </BulletedListItem>
                      </BulletedList>
              <Paragraph>
                        This feedback proved to be exceptionally valuable in refining the design and facilitating iterative improvements for the second version.
              </Paragraph>
              <figure>
                        <Image 
                          alt="A screenshot of version 1 and version 2 of the feature"
                          loading="lazy"
                          width="0"
                          height="0"
                          decoding="async"
                          src="/assets/whatsappblog3.png"
                          style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                          className="rounded-lg border border-border"
                        />
                        <figcaption className="font-cormorant italic text-base text-center mx-auto pt-2 md:pt-6">
                          Version 1 and Version 2 of the poll feature
                        </figcaption>
                      </figure>
              {/* UX Blueprint section */}
              <Title>UX Blueprint</Title>
              <Paragraph>
                        Our journey commenced with the creation of the UX Blueprint, a foundational step that played a pivotal role in shaping our strategy. Through careful analysis, we delineated how the design of this innovative feature would not only enhance customer experience but also deliver value to the business. This strategic blueprint also encompassed the identification of the tools that would guide us on this path, empowering us to navigate the journey efficiently and ultimately achieve our objectives.
              </Paragraph>
              <Image 
                        alt="UX Blueprint diagram"
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        src="/assets/whatsappblog4.jpeg"
                        style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                        className="rounded-lg border border-border"
                      />
              {/* Competitive Analysis section */}
              <Title>Competitive Analysis</Title>
              <Paragraph>
                        Our approach included an exploration of the messaging and survey app landscape, scrutinizing the array of features they provided. This proactive investigation paved the way for us to identify avenues for differentiation and innovation, aiming to set our product apart from direct competitors.
              </Paragraph>
              <Paragraph>
                        In this analysis, we observed that major players like Facebook Messenger, Telegram, and Line have already incorporated the poll feature into their applications. This discovery illuminated a gap for WhatsApp, as it presently offers fewer functionalities to its user base. Recognizing this, we identified the addition of the poll feature as an opportunity to both entice new users and enhance overall user satisfaction.
              </Paragraph>
              <Paragraph>
                        To stand out from our competitors, our feature needed to excel in user-friendliness, clarity, and flexibility.
              </Paragraph>
              {/* User flow section */}
              <Title>User flow</Title>
              <Paragraph>
                        We meticulously crafted a user flow to pinpoint the primary pain points that arise when making group decisions.
              </Paragraph>
              <Paragraph>
                        Upon dissecting the existing user flow, several areas of friction surfaced:
              </Paragraph>
              <BulletedList>
                        <BulletedListItem>
                          Users often encounter difficulties when attempting to create lists with multiple options as space is limited.
                        </BulletedListItem>
                        <BulletedListItem>
                          The necessity to copy and paste lists elevates the risk of information loss.
                        </BulletedListItem>
                        <BulletedListItem>
                          The current setup lacks the ability for users to discern whether everyone has responded or identify participants who are yet to contribute, fostering uncertainty and hindering efficient decision-making.
                        </BulletedListItem>
                      </BulletedList>
              <Image 
                        alt="User flow diagram"
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        src="/assets/whatsappblog5.png"
                        style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                        className="rounded-lg border border-border"
                      />
              <Paragraph>
                        In the subsequent user flow, the integration of the poll feature is distinctly evident. Notably, the user&apos;s journey becomes notably streamlined, with fewer steps required, rendering the task notably simpler and more convenient.
              </Paragraph>
              <Image 
                        alt="USer flow with polls feature"
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        src="/assets/whatsappblog6.png"
                        style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                        className="rounded-lg border border-border"
                      />  
              {/* Brand Analysis section */}
              <Title>Brand Analysis</Title>
              <Paragraph>
                        To integrate this novel feature while maintaining harmony with the existing app, we embarked on a research journey delving into WhatsApp&apos;s mission, philosophy, and design principles.
              </Paragraph>
              <Quote>
                        simple, personal, connection – Whatsapp
                      </Quote>
              <Paragraph>
                        WhatsApp&apos;s mission revolves around crafting a messaging platform that&apos;s simple, secure and reiable – a space where users can seamlessly connect with friends and family across the globe.
              </Paragraph>
              <Paragraph>
                        The design is simple and easy to use, so Whatsapp doesn&apos;t need to explain any of its features to its users.
              </Paragraph>
              <Paragraph>
                        The tone is plain and simple. They use a direct language to describe the actions the user can perform. It does not include anything that can cause distraction or confusion and they only use enough text to explain messages.
              </Paragraph>
              <Paragraph>
                        Their primary color is green –Whatsapp green– which they use to evoke a friendly and calm feeling. They also use a different set of colors to complement it but with caution.
              </Paragraph>
              <Image 
                        alt="Color palette"
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        src="/assets/whatsappblog7.png"
                        style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                        className="rounded-lg border border-border"
                      />
              <Paragraph>The typeface used in their chat is Helvetica Neue, which complements the brand personality. Helvetica Neue is a clear and accesible typeface.</Paragraph>
              <Image 
                        alt="Typeface"
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        src="/assets/whatsappblog8.png"
                        style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                        className="rounded-lg border border-border"
                      />
              <Paragraph>Buttons are circular and they drop a shadow effect adding emphasis.</Paragraph>
              <Image 
                        alt="Buttons"
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        src="/assets/whatsappblog9.png"
                        style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                        className="rounded-lg border border-border"
                      />
              <Paragraph>
              In summary, our design should be grounded in these three core principles:
              </Paragraph>
              <BulletedList>
                        <BulletedListItem>
                          The user interface should seamlessly blend with the user&apos;s device, particularly adhering to Android design principles in our case.
                        </BulletedListItem>
                        <BulletedListItem>
                          The feature&apos;s design must prioritize simplicity.
                        </BulletedListItem>
                        <BulletedListItem>
                          The design should be intuitive and easy to understand.
                        </BulletedListItem>
                      </BulletedList>
              {/* Navigating the feature section */}
              <Title>Navigating the feature</Title>
              <BulletedList>
                        <BulletedListItem>
                          When a user enters a group chat, they can access additional options by tapping the top right icon, and there they will find the &ldquo;Group&apos;s Polls&rdquo; feature.
                        </BulletedListItem>
                        <BulletedListItem>
                          Upon entering this new screen, users can view existing polls and create new ones by tapping the add icon. Alternatively, they can initiate a new poll creation process by tapping on the group name displayed in the top bar, which leads them to the group&apos;s details, where they can select &ldquo;Create New Poll&rdquo;.
                        </BulletedListItem>
                      </BulletedList>
              <Image 
                        alt="Group's polls and create new poll screens"
                        loading="lazy"
                        width="0"
                        height="0"
                        src="/assets/whatsappblog10.png"
                        style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                        className="rounded-lg border border-border"
                      />
              <figcaption className="text-sm text-muted-foreground text-center mt-2">
                        [1] 🇬🇧Group&apos;s polls: 🇪🇸Encuestas del grupo [2] 🇬🇧Create new poll: 🇪🇸Crear nueva encuesta
                      </figcaption>
              <BulletedList>
                        <BulletedListItem>
                        To create a new poll, the user has to fill the title and options. Options can be rearrange by dragging them. They can also choose between multiple/single choice [3] and anonymous/public votes [4].
                        </BulletedListItem>
                      </BulletedList>
              <Image 
                        alt="Poll creation screen"
                        loading="lazy"
                        width="0"
                        height="0"
                        src="/assets/whatsappblog11.png"
                        style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                        className="rounded-lg border border-border"
                      />
              <figcaption className="text-sm text-muted-foreground text-center mt-2">
              [3] 🇬🇧Multiple choice: 🇪🇸Respuesta Múltiple [4] 🇬🇧Anonymous vote: 🇪🇸Encuesta anónima
              </figcaption>
              <BulletedList>
                        <BulletedListItem>
                        Once the poll is published, the user can vote and edit their choice by tapping on a different option.
                        </BulletedListItem>
                        <BulletedListItem>
                        The user can see a list of polls inside &ldquo;Group&apos;s polls&rdquo; [5], active ones with a white background and inactive ones with a grey background.
                        </BulletedListItem>
                      </BulletedList>
              <Image 
                        alt="Poll list screen"
                        loading="lazy"
                        width="0"
                        height="0"
                        src="/assets/whatsappblog12.png"
                        style={{ color: 'transparent', objectFit: 'contain', width: '100%', height: 'auto' }}
                        className="rounded-lg border border-border"
                      />
              <figcaption className="text-sm text-muted-foreground text-center mt-2">
              [5] 🇬🇧Group&apos;s polls: 🇪🇸Encuestas del grupo
              </figcaption>
              <Paragraph>
              Presented below is the latest iteration of the prototype, encompassing the complete user journey—from the creation of a poll, selection of an option, to the comprehensive overview of the poll&apos;s list and status.
              </Paragraph>
              <video
                        controls
                        muted
                        loop
                        playsInline
                        className="rounded-lg border border-border mx-auto w-30 h-30"
                        src="/assets/whatsappblog13.mp4"
                      />
              {/* Next steps section */}
              <Title>Next steps</Title>
              <Paragraph>
                        While our current prototype has reached a commendable stage, acknowledging that perfection is a continuous pursuit, we are poised to conduct another round of usability testing involving 5 individuals. This iterative approach allows us to fine-tune the design, ensuring that our product evolves in harmony with user needs and expectations.
              </Paragraph>
              <Paragraph>
                        Other feature we think is worth exploring are:
              </Paragraph>
              <BulletedList>
                        <BulletedListItem>
                          <strong>Pending Votes Visibility</strong>: Enabling users to identify who within the group is yet to cast their vote.
                        </BulletedListItem>
                        <BulletedListItem>
                          <strong>Expiry Date and Reminders</strong>: Introducing the ability to set an expiration date for polls and sending reminders to participants who have yet to vote.
                        </BulletedListItem>
                        <BulletedListItem>
                          <strong>Enhance the Visual Design</strong>: Adding a more engaging and modern visual design to the feature.
                        </BulletedListItem>
                        <BulletedListItem>
                          <strong>Improved Vote Display</strong>: Seeking innovative methods to better display the quantity of votes received for each option.
                        </BulletedListItem>
                      </BulletedList>
            </div>
          </div>

          {/* Navigation */}
          <NextBack 
            prev={{
              href: "/buidlguidl",
              text: "Buidlguidl"
            }}
            next={{
              href: "/nectar",
              text: "Nectar"
            }}
          />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
