'use client';

import Section from '@/components/General/Section';

export default function PrivacyPolicyPage() {
  return (
    <Section
      className='relative mx-auto flex h-fit w-screen
      flex-col  overflow-x-hidden p-8'
      animate
    >
      <h1 className='mt-24  text-xl  font-bold sm:text-2xl md:text-3xl lg:text-5xl'>
        <span className='text-instagram'>P</span>rivacy{' '}
        <span className=' text-instagram'>P</span>olicy
      </h1>

      <p className='mt-5'>
        FollowFinder operates the website &quot;followfinder&quot; at{' '}
        <a href='https://followfinder.vercel.app/'>
          https://followfinder.vercel.app/
        </a>
        . We take your privacy seriously. To better protect your privacy, We
        provide this privacy policy notice explaining the way your personal
        information is collected and used.
      </p>
      <p className='mt-3'>
        <strong>Collection of Routine Information</strong>
      </p>
      <p>
        This website track basic information about its visitors. This
        information includes, but is not limited to, IP addresses, browser
        details, timestamps and referring pages. None of this information can
        personally identify specific visitors to this website. The information
        is tracked for routine administration and maintenance purposes.
      </p>
      <p className='mt-3'>
        <strong>Cookies</strong>
      </p>
      <p>
        Where necessary, this website uses cookies to store information about a
        visitor’s preferences and history to better serve the visitor and/or
        present the visitor with customized content.
      </p>
      <p className='mt-3'>
        <strong>Advertisement and Other Third Parties</strong>
      </p>
      <p>
        Advertising partners and other third parties may use cookies, scripts
        and/or web beacons to track visitor activities on this website to
        display advertisements and other useful information. Such tracking is
        done directly by the third parties through their servers and is subject
        to their privacy policies. This website has no access or control over
        these cookies, scripts and/or web beacons that may be used by third
        parties.
      </p>
      <p>
        We have included links on this website for your use and reference. We am
        not responsible for the privacy policies on these websites. You should
        be aware that the privacy policies of these websites may differ from my
        own.
      </p>
      <p>
        Link to the privacy policy of third-party service providers used by the
        website
      </p>
      <ul>
        <li>
          <a href='https://policies.google.com/privacy'>Google Analytics</a>
        </li>
      </ul>
      <p className='mt-3'>
        <strong>Security</strong>
      </p>
      <p>
        The security of your personal information is important to me, but
        remember that no method of transmission over the Internet, or method of
        electronic storage, is 100% secure. While We strive to use commercially
        acceptable means to protect your personal information, We cannot
        guarantee its absolute security.
      </p>
      <p className='mt-3'>
        <strong>Changes To This Privacy Policy</strong>
      </p>
      <p>
        This Privacy Policy is effective as of 2024-03-26 and will remain in
        effect except concerning any changes in its provisions in the future,
        which will be in effect immediately after being posted on this page. We
        reserve the right to update or change my Privacy Policy at any time and
        you should check this Privacy Policy periodically. If We make any
        material changes to this Privacy Policy, We will notify you either
        through the email address you have provided me or by placing a prominent
        notice on my website.
      </p>
      <p className='mt-3'>
        <strong>Contact Information</strong>
      </p>
      <p>
        For any questions or concerns regarding the privacy policy, please send
        me an email at{' '}
        <a href='mailto:antonis.sykoutris@protonmail.com'>
          antonis.sykoutris@protonmail.com
        </a>
        .
      </p>
    </Section>
  );
}
