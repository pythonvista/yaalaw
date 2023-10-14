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
            <p class="mt-1 text-base leading-tight text-gray-600">
              {{ team.title }}
             
            </p>
          </div>

          <div class="hidden lg:block"></div>
        </div>
      </div>
    </div>

    <v-dialog v-model="dialog" width="auto">
      <v-card class="wee">
        <section 
          class="pt-10 px-8 overflow-hidden wee overflow-y-scroll bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16"
        >
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid items-center grid-cols-1 md:grid-cols-2">
              <div class="wee h-[80%]">
                <h2
                  class="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl"
                >
                  {{ dform.name }} <br />
                  {{ dform.title }}
                </h2>
                <p
                  class="max-w-lg mt-3 pr-4 text-lg leading-relaxed text-gray-600 md:mt-8"
                >
                  {{ dform.descr }}
                 
                </p>
              </div>

              <div class="relative">
                <img   width="70"
                  class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                  alt=""
                />

                <img
                  class="relative rounded-md shadow-lg w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-90"
                  :src="dform.img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false"
            >Close </v-btn
          >
        </v-card-actions>
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
        descr: 'Yemi Ayodele Ayeni is the Principal Partner of YAA LAW CONSULT. A seasoned attorney with vast knowledge in corporate law, property transactions, civil and criminal litigation, and arbitration. His wizardry in immigration law has earned him high esteem and reputation. Adding to his deep-seated knowledge of the law as a British-Nigerian trained lawyer, Yemi possesses outstanding writing, analytical and advocacy skills, which he brings to bear on clients works. He honed his legal education at the Royal Docks Law School of the University of East London where he served as a Lead Counsel for couple of years.In addition to his legal expertise, Yemi has gained wealth of experience in leadership engagements with Commonwealth Business Council, International Leadership Association, United Nations Alliance of Civilisations, including his service as a member of the Board of Governors (University of East London). In addition to his status as a Barrister and Solicitor, Yemi is also a chartered Arbitrator.'
      },
      {
        name: 'Biodun Ajibade Esq',
        title: 'LLB, BL',
        img: 'https://i.imgur.com/QqnjNV7.jpg',
        descr: 'Biodun Ajibade is the Head of Chambers at YAA Law Consult. A Consultant with hands on experience drawn from a robust legal practice in various sectors. Biodun has outstanding experience of over 10 years post call in Litigations, Corporate Law Practice and Commercial Law. In his capacity, he has duly advised and subsequently represented Individuals and Corporate Entities in Constitutional and Election Petition Matters; Real Estate and Landed Disputes; Debt Recovery Matter and Mergers & Acquisitions. Biodun is vast in strategic negotiating alliances, formal contractual documentations and assistance in regulatory filing and compliance. These are predicated upon the requisite skills and aura of an attorney which Biodun has always exhibited to protect and serve the interests of our Clients diligently and responsibly over years.'
      },
      {
        name: 'Adefolake Odunayo Ogundipe',
        title: 'LL.B (Hons), B.L',
        img: 'https://i.imgur.com/iqcBUtf.jpg',
        descr: ''
      },
      {
        name: 'Omowunmi Oludimu',
        title: 'LL.B (Hons), B.L',
        img: 'https://i.imgur.com/e9Lnxsw.jpg',
      },
      {
        name: 'Vincent Akomolafe Taye',
        title: 'BA, LLB, BL',
        img: 'https://i.imgur.com/uXuiWNP.jpg',
        descr: "Vicent Akomolafe Taye is a legal luminary at YAA LAW CONSULT.A versed and thorough bread attorney in corporate law, property and criminal litigation. He is known for his success in creating a legacy of excellence and integrity.His uncommon wealth of experience in management, Human relations, leadership and advocacy reflect splendid ly in his conduct,ideas and profession.He is adored for his unparalleled teaching ability and tremendous practicality of laws.He is notably breaking grounds and limits.He is a standard-bearer per excellence with a can-do it spirit.Vincent had a stint as of one of lead counsel at Fakokunde's chamber."
      },
      {
        name: 'Joshua Oluwafemi Abe',
        title: 'LLB, BL, ACIArb',
        img: 'https://i.imgur.com/SQfLJjK.jpg',
        descr: 'JOSHUA OLUWAFEMI ABE is an associate at YAA LAW CONSULT. A seasoned legal practitioner with about five years experience of legal practice and research. Joshua obtained his Bachelor of Laws (LL.B) degree from Ekiti State University, Ado-Ekiti, Where he graduated as one of the best students. Before Law school Joshua served as the litigation manager at Babs Akinwumi and co. He is currently pursuing his LL.M.'
      },
      {
        name: 'Christiana Aderonke Akanni',
        title: 'LLB, BL',
        img: 'https://i.imgur.com/5QHm7z1.jpg',
        descr: 'Christiana Aderonke Akanniis an associate at YAA Law Consult. A dexterous legal practitioner in legal research, corporate practice, family law. Christiana obtained her Bachelor of law (LL.B) degree from University of Abuja. Education - Nigerian Law School (BL) - Univerity of Abuja (LL.B) Membership and Professional Associations * Nigerian Bar Association'
      },
      {
        name: 'Adebukola Ajibade',
        title: 'LLB, BL, ACIArb',
        img: 'https://i.imgur.com/XUN1CuT.jpg',
        descr: 'Adebukola is an associate at Yaa Law Consult , She is a legal Practitioner with over 8 years experience across all sectors of law. She is an expert in formulation of policies and practices that foster good corporate governance, requisite regulatory compliance and drive operational efficiency across companies in all sectors. Her expertise in Family law and litigation is worthy of note.'
      },
    ],
  }),
  methods:{
    Open(team){
      this.dialog = true
      this.dform = team
    }
  }
};
</script>

<style>

.wee{
  overflow-y: scroll;
}

</style>
