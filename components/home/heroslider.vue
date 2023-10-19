<template>
  <div class="w-full">
    <swiper
      :spaceBetween="30"
      :slidesPerView="1"
      :breakpoints="{
        '640': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        class="overflow-hidden"
        v-for="(i, index) in areas"
        :key="index"
      >
        <div class="overflow-hidden shadow-md bg-white rounded">
          <div class="p-8">
            <div class="flex items-center justify-start">
              <img class="flex-shrink-0 w-8 h-auto" :src="i.img" alt="" />
              <div class="ml-5 mr-auto">
                <p class="text-sm font-bold text-black">
                  {{ i.title }}
                </p>
              </div>
            </div>
            <p
              class="text-base text-left mb-3 leading-relaxed text-gray-600 mt-7"
            >
              {{ i.info.slice(0, 180) }}..
            </p>
            <q-btn @click="Open(i)" size="8px" color="brown">Read More</q-btn>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <v-dialog
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
      v-model="dialog"
    >
      <v-card>
        <v-toolbar dark color="#8c4f0d">
          <v-toolbar-title class="text-white">
            {{ dform.title }}</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn variant="text" color="white" @click="dialog = false">
              Close
            </v-btn>
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
              {{ dform.title }} <br />
              
            </h2>
          </div>

          <div class="mt-3">
            <p
              v-html="dform.info"
              class="mt-3 pr-4 text-lg leading-relaxed text-gray-600 md:mt-8"
            ></p>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
export default {
  data: () => ({
    dialog: false,
    dform: {},
    areas: [
      {
        img: 'https://i.imgur.com/RxeTZ5a.jpg',
        title: 'Maritime Law',
        info: "Maritime law, also known as admiralty law, is a specialized legal framework that governs activities and issues related to the world's oceans and waterways. It encompasses a wide range of legal matters, including navigation, shipping, commerce, marine environmental protection, and accidents at sea. Maritime law helps regulate disputes, liability, and responsibilities in international waters and often involves international agreements and conventions. It plays a crucial role in facilitating global trade and maintaining safety and order on the seas. Maritime law is a complex and evolving field that covers both private and public interests in maritime activities.",
      },
      {
        img: 'https://i.imgur.com/j99hxP9.jpg',
        title: 'INTELLECTUAL PROPERTY',
        info: 'Our firm offers full legal services to indigenous companies seeking National or International patent protection and to international companies planning to do business in Nigeria. Our firm protect the content of a Company�s Internet site and other technology-related assets, which may include all of the intellectual property areas described above. Our intellectual property experts are well experienced in the areas of copyright, trademark, patent, and trade secret. The firm has worked on collaboration agreements, licensing, and software development. Our attorneys have been involved in advising on Acquisition, Registration, Protection of Intellectual Property Rights, Franchising, and Licensing.',
      },
      {
        img: 'https://i.imgur.com/6BiNBPT.png',
        title: 'LITIGATION',
        info: 'Our Counsel engage in productive brainstorming exercise to come out with the best strategy to prosecute our Clients interest. We see our role as providing not only legal counsel but also professional business advice so that the final outcome is favorable to our Clients goals and objectives. Our litigation experience covers the under listed areas: General Commercial Litigation Oil & Gas Maritime Divorce Banking and Finance and Debt recovery Insurance Real Estate and Landed Disputes Human Rights Constitutional Law Litigation Prosecution and defence of criminal cases Election Petition cases',
      },
      {
        img: 'https://i.imgur.com/MnQkgtZ.png',
        title: 'REAL ESTATE',
        info: 'Our firm combines land planning, land development with real estate practice. Our real estate experts are well positioned to represent local and foreign lenders in negotiating and documenting complex real estate financing involving diverse projects. The practice also includes land and building acquisitions, development, construction and marketing of property leasing and day-to-day real estate operations. Our real estate Attorneys also engage in the following:- The conduct of negotiations, searches, enters into correspondence with and investigates the title of persons involved in dealings relating to land. The drafting and engrossing of leases, mortgages and other instruments affecting land and where necessary obtains the approval thereto of any Government Official or Local Authority whose approval may be required. We also attend to the Stamping and Registration of land and all registrable instruments.',
      },
      {
        img: 'https://i.imgur.com/dngDaoh.png',
        title: 'IMMIGRATION',
        info: 'We pride ourselves on immigration services such as visas, residence, and settlement for foreign investors with seamless incorporation and registration with Corporate Affairs Commission (CAC), Nigerian Investment Promotion Commission (NIPC) and Securities and Exchange Commission (SEC) respectively. Our internationally trained attorneys are equally equipped with vast knowledge and experience in immigration processes for clients who are willing to emigrate to other countries for visit, business, settlement and other routes that may best meet their aspirations.',
      },
      {
        img: 'https://i.imgur.com/Ahglt90.png',
        title: 'RECOVERY OF DEBT',
        info: 'We have vast experienced attorneys on asset tracing and debt recovery both locally and internationally. Legal issues arising from total breach of contractual obligations or non-compliance are professionally handled by our experts.',
      },
      {
        img: 'https://i.imgur.com/ooKXCNy.png',
        title: 'CORPORATE AND COMMERCIAL LAW',
        info: 'Corporate and commercial practice involves representation of private and public owned companies in business formation, operations, organization, finances, mergers & acquisitions, debt securities, strategic alliances and a wide variety of commercial transactions including negotiations and documentation of transactions and assistance with regulatory filings and compliance. In the area of corporate financing, we are willing and ready to represent Clients in public and private financing. In private financing, the firm acts as counsel to both issuers and investors in raising capital, including institutional and venture capital placements. The Corporate and Commercial Department is well capable of representing individual borrowers, domestic and foreign banks and other financial institutions in secured and unsecured loan transactions, credit enhancement facilities, letters of credit, loan participation and in restructuring problem loans. We have extensive experience in consulting for foreign investors on issues of Company formation, registration of business names, procurement of business, residential and various operating licenses.',
      },
      {
        img: 'https://i.imgur.com/rf7LBXh.png',
        title: 'ALTERNATIVE DISPUTE RESOLUTION',
        info: 'Our membership of the Negotiation and Conflict Management Group (NCMG) is based on our firm believe that disputes can better be settled at the earliest possible time by employing the mechanism of alternative dispute resolution such as mediation, conciliation, commercial arbitration and where practicable the use of retired judges as negotiators and conciliators. We have found out that suggesting ADR (Alternative Dispute Resolution) options to our Clients often lead to quick, effective and satisfactory settlement of cases thereby relegating litigation to a last resort option. Our seasoned commercial arbitrators provide expertise required for speedy, efficient, effective and binding alternative methods of resolving disputes.',
      },
    ],
  }),
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  methods: {
    Open(team) {
      this.dialog = true;
      this.dform = team;
    },
  },
};
</script>

<style scoped>
.swiper {
  padding: 2.5em 0;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
