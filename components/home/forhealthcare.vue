<template>
  <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h2
          class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
        >
          Meet the team
        </h2>
        <p
          class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600"
        >
          Our expert know the best legal approaches to apply to your legal
          issues
        </p>
      </div>

      <div
        class="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-4 gap-x-5"
      >
        <div @click="Open(team)" v-for="(team, i) in teams" :key="i">
          <div class="hover:text-red-600 cursor-pointer">
            <img
              class="object-cover mx-auto rounded-lg w-28 h-28"
              :src="team.img"
              alt=""
            />
            <p class="mt-8 text-lg font-semibold leading-tight">
              {{ team.name }}
            </p>
            <p class="mt-1 italic font-mono text-base leading-tight text-gray-600">
              {{ team.title }}
            </p>
          </div>

          <div class="hidden lg:block"></div>
        </div>

      </div>

      <div class="flex w-full justify-center items-center py-3  mt-4">
        <a
            href="#contact"
            class="bg-[#8c4f0d]  xs:flex  cursor-pointer text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >Join Our Team</a
          >
      </div>
    </div>

    <v-dialog
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
      v-model="dialog"
    >
      <v-card>
        <v-toolbar dark color="#8c4f0d">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="text-white"> {{ dform.name }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn variant="text" color="white" @click="dialog = false"> Close </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="p-5">
          <div class="flex justify-start items-center gap-3">
            <img
              width="300"
              class="relative rounded-md shadow-lg"
              :src="dform.img"
              alt=""
            />
            <h2
              class="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl"
            >
              {{ dform.name }} <br />
              <p class="italic font-mono font-light text-xl">{{ dform.title }}</p>
              
            </h2>
          </div>

          <div>
            <p
              v-html="dform.descr"
              class="mt-3 pr-4 text-lg leading-relaxed text-gray-600 md:mt-8"
            ></p>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
export default {
  data: () => ({
    dform: {},
    dialog: false,
    teams: [
      {
        name: 'Yemi Ayodele Ayeni',
        title: 'BSc, MSc, LLB, BL, LLM, MCIArb',
        img: 'https://i.imgur.com/iZLPx6U.png',
        descr:
          'Yemi Ayodele Ayeni is the Principal Partner of YAA LAW CONSULT. A seasoned attorney with vast knowledge in corporate law, property transactions, civil and criminal litigation, and arbitration. His wizardry in immigration law has earned him high esteem and reputation. Adding to his deep-seated knowledge of the law as a British-Nigerian trained lawyer, Yemi possesses outstanding writing, analytical and advocacy skills, which he brings to bear on clients works. He honed his legal education at the Royal Docks Law School of the University of East London where he served as a Lead Counsel for couple of years.In addition to his legal expertise, Yemi has gained wealth of experience in leadership engagements with Commonwealth Business Council, International Leadership Association, United Nations Alliance of Civilisations, including his service as a member of the Board of Governors (University of East London). In addition to his status as a Barrister and Solicitor, Yemi is also a chartered Arbitrator. <br> <h3 style="font-weight: bold; text-decoration:underline;">Education</h3> <ul> <li>Robert Gordon University Law School Aberdeen, Scotland-UK (LLM in Law and International Law)</li> <li>Nigerian Law School (BL- Barrister at Law)</li> <li> University of East London (LLB-Hons, Law)</li><li> Edinburgh Napier University Business School, Edinburgh-Scotland, UK (MSC Business Management with Human Resource Management)</li><li> University of Ilorin, Nigeria (BSc-Hons, Sociology)</li></ul> <h3 style="font-weight: bold; text-decoration:underline;">Membership and Professional Associations</h3>  <ul> <li>Chartered Institute of Arbitrators</li> <li>Nigerian Bar Association</li> <li> Commonwealth Association of Legislative Counsel,</li><li>Human Rights Lawyers Association, UK,</li><li>International Law Association</li></ul>',
      },
      {
        name: 'Biodun Ajibade Esq',
        title: 'LLB, BL',
        img: 'https://i.imgur.com/QqnjNV7.jpg',
        descr:
          'Biodun Ajibade is the Head of Chambers at YAA Law Consult. A Consultant with hands on experience drawn from a robust legal practice in various sectors. Biodun has outstanding experience of over 10 years post call in Litigations, Corporate Law Practice and Commercial Law. In his capacity, he has duly advised and subsequently represented Individuals and Corporate Entities in Constitutional and Election Petition Matters; Real Estate and Landed Disputes; Debt Recovery Matter and Mergers & Acquisitions. Biodun is vast in strategic negotiating alliances, formal contractual documentations and assistance in regulatory filing and compliance. These are predicated upon the requisite skills and aura of an attorney which Biodun has always exhibited to protect and serve the interests of our Clients diligently and responsibly over years. <h3 style="font-weight: bold; text-decoration:underline;">Education</h3> <ul> <li>Nigerian Law School (B.L-Barrister at Law))</li> <li>University of Ado-Ekiti, Nigeria (LL.B hons., Law)</li></ul> <h3 style="font-weight: bold; text-decoration:underline;">Membership and Professional Associations</h3> <ul> <li>Nigerian Bar Association</li></ul>',
      },
      {
        name: 'Adefolake Odunayo Ogundipe',
        title: 'LL.B (Hons), B.L',
        img: 'https://i.imgur.com/iqcBUtf.jpg',
        descr: 'Adefolake is a seasoned counsel, chartered secretary, a Corporate Governance Professional. She is a senior Associate at YAA Law Consult. She has a proven track record of success in representing clients in a wide range of legal matters, including business law, civil litigation, criminal law, family law, intellectual property law, labor and employment law, real estate law and tax law. Adefolake is committed to providing clients with personalized attention and responsive communication.She understands that legal matters can be stressful and confusing generally hence, she is keened to help clients navigate the legal system and help them achieve their desired outcomes.<br> <br> Education <br>  Nigerian Law School (B.L - Barrister at Law)<br>  - Ekiti State University, Ado-Ekiti, Ekiti State (LL.B Hons.)<br> <br>Membership and Professional Associations:*  <br>Nigerian Bar Association* <br> Ondo State Taskforce on Localizing Renewable Energy Policies and Laws.* <br> Amnesty International Nigeria.* <br> Young African Leadership Initiative (YALI)',
      },
      {
        name: 'Omowunmi Oludimu',
        title: 'LL.B (Hons), B.L',
        img: 'https://i.imgur.com/e9Lnxsw.jpg',
        descr: 'Omowunmi Oludimu is an Associate at YAA Law Consult. She is analytical, enthusiastic and dedicated to using her skills in achieving goals and objectiveswith a high level of excellence.She is a Nigerian trained lawyer who is vast in Property Law Transactions Corporate Law Practice, Litigation (Civil and Criminal Cases).She possesses the ability to draw logical conclusions and is committed to maintaining a high level of communication with clients. Her strong interpersonal skills in Legal Drafting and Research is worthy of mention. <br> <br> Education <br>  - Nigerian Law School, Lagos <br>  - Barrister at Law (B.L) - Olabisi Onabanjo University, Ago-Iwoye, Ogun State <br>  - LL.B (Hons). <br> <br>  Membership and Professional Associations * <br> Nigerian Bar Association'
      },
      {
        name: 'Vincent Akomolafe Taye',
        title: 'BA, LLB, BL',
        img: 'https://i.imgur.com/uXuiWNP.jpg',
        descr:
          "Vicent Akomolafe Taye is a legal luminary at YAA LAW CONSULT.A versed and thorough bread attorney in corporate law, property and criminal litigation. He is known for his success in creating a legacy of excellence and integrity.His uncommon wealth of experience in management, Human relations, leadership and advocacy reflect splendid ly in his conduct,ideas and profession.He is adored for his unparalleled teaching ability and tremendous practicality of laws.He is notably breaking grounds and limits.He is a standard-bearer per excellence with a can-do it spirit.Vincent had a stint as of one of lead counsel at Fakokunde's chamber.   <h3 style='font-weight: bold; text-decoration:underline;'>Education</h3> <ul> <li>Nigeria law school,Lagos.</li> <li>University of Ife(O.A.U)Ile-Ife,Osun-state.</li> <li>University of Ilorin,(Kwara- state).</li></ul> <h3 style='font-weight: bold; text-decoration:underline;''>Membership and Professional Associations</h3>  <ul> <li>Nigeria Bar Association,Ikeja branch.</li> <li>Human rights lawyers Association, Nigeria.</li> </ul>",
      },
      {
        name: 'Joshua Oluwafemi Abe',
        title: 'LLB, BL, ACIArb',
        img: 'https://i.imgur.com/SQfLJjK.jpg',
        descr:
          'JOSHUA OLUWAFEMI ABE is an associate at YAA LAW CONSULT. A seasoned legal practitioner with about five years experience of legal practice and research. Joshua obtained his Bachelor of Laws (LL.B) degree from Ekiti State University, Ado-Ekiti, Where he graduated as one of the best students. Before Law school Joshua served as the litigation manager at Babs Akinwumi and co. He is currently pursuing his LL.M. <br> <br> Education <br>- Nigerian Law School(BL-Barrister at Law) <br>- Ekiti State University, Ado-Ekiti, Ekiti State(LLB-Hons, Law) <br> <br> Membership and Professional Associations <br>* Institute of chartered Arbitrators <br>* Nigerian Bar Association',
      },
      {
        name: 'Christiana Aderonke Akanni',
        title: 'LLB, BL',
        img: 'https://i.imgur.com/5QHm7z1.jpg',
        descr:
          'Christiana Aderonke Akanniis an associate at YAA Law Consult. A dexterous legal practitioner in legal research, corporate practice, family law. Christiana obtained her Bachelor of law (LL.B) degree from University of Abuja. Education - Nigerian Law School (BL) - Univerity of Abuja (LL.B) Membership and Professional Associations * Nigerian Bar Association <br> <br> Education <br>- Nigerian Law School (BL) <br> - Univerity of Abuja (LL.B) <br> <br> Membership and Professional Associations <br>* Nigerian Bar Association',
      },
      {
        name: 'Adebukola Ajibade',
        title: 'LLB, BL, ACIArb',
        img: 'https://i.imgur.com/XUN1CuT.jpg',
        descr:
          'Adebukola is an associate at Yaa Law Consult , She is a legal Practitioner with over 8 years experience across all sectors of law. She is an expert in formulation of policies and practices that foster good corporate governance, requisite regulatory compliance and drive operational efficiency across companies in all sectors. Her expertise in Family law and litigation is worthy of note. <br> <br> Education <br> - Diploma in Law (Babcock University- Nigeria) <br>- BSc in International Law and Diplomacy (Babcock University- Nigeria) <br>- LLB -Hons, Law (Birmingham City University) <br>- BL- Barrister at Law, (Nigerian Law School) <br> <br>Membership and Professional Associations <br>* Nigerian Bar Association <br>* Institute of Chartered Secretaries and Administrators of Nigeria <br>* The Chartered Institute of Arbitrators',
      },
    ],
  }),
  methods: {
    Open(team) {
      this.dialog = true;
      this.dform = team;
    },
  },
};
</script>

<style>
.wee {
  overflow-y: scroll;
}
</style>
