<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col>
          <v-navigation-drawer
            left
            permanent
            fixed
            clipped
            class="hidden-sm-and-down"
          >
            <v-list class="mt-16" shaped>
              <v-list-item>
                <v-list-item-title class="title ml-7 text-decoration-underline"
                  >目录</v-list-item-title
                >
              </v-list-item>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#live')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8">实时更新</v-list-item-title>
                </v-list-item>
              </v-hover>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#date')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8">重要日期</v-list-item-title>
                </v-list-item>
              </v-hover>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#form_faq')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8"
                    >填写表格疑问</v-list-item-title
                  >
                </v-list-item>
              </v-hover>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#class_faq')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8"
                    >日常上课疑问</v-list-item-title
                  >
                </v-list-item>
              </v-hover>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#fee_faq')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8">学费疑问</v-list-item-title>
                </v-list-item>
              </v-hover>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#course_faq')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8">科系问题</v-list-item-title>
                </v-list-item>
              </v-hover>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#scolarship_faq')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8">奖贷学金</v-list-item-title>
                </v-list-item>
              </v-hover>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#hostel_faq')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8">宿舍问题</v-list-item-title>
                </v-list-item>
              </v-hover>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#environment_faq')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8"
                    >校内&校外环境与生活问题</v-list-item-title
                  >
                </v-list-item>
              </v-hover>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#degree_faq')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8">往后升学</v-list-item-title>
                </v-list-item>
              </v-hover>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#upu_faq')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8"
                    >UPU申请问题</v-list-item-title
                  >
                </v-list-item>
              </v-hover>

              <v-hover v-slot="{ hover }">
                <v-list-item
                  @click="$vuetify.goTo('#dermasiswa_faq')"
                  :class="{ 'red white--text': hover }"
                >
                  <v-list-item-title class="ml-8">助学金</v-list-item-title>
                </v-list-item>
              </v-hover>
            </v-list>
          </v-navigation-drawer>
        </v-col>

        <v-col cols="12" class="col-md-10 mr-md-8">
          <v-row id="live">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                实时更新
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>
              <span class="text-center">
                <p>
                  Diploma回忆录实时更新版本
                  <a
                    href="https://docs.google.com/document/d/1adcmMMb_TGeoGya83xHyUAMP3Ccwq3XYlr83uI0Hq4c/edit?usp=sharing"
                    target="_blank"
                    class="red--text"
                    >点击这里</a
                  >
                  追踪
                </p>
              </span>
            </v-col>
          </v-row>

          <v-row id="date">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                重要日期
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>
              <p class="title">UTM DIPLOMA PROGRAMME</p>
              <p class="subtitle-1">INTAKE: JULY 2022</p>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Item</th>
                      <th>Local Date</th>
                      <th>International Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Online Application</td>
                      <td>Extended until 24 July 2022</td>
                      <td>15 March – 25 July 2022</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Status Application</td>
                      <td>After the official SPM result released</td>
                      <td>Starting 15 March 2022</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Open Day</td>
                      <td>3 July 2022</td>
                      <td>3 July 2022</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>New Student Registration Day</td>
                      <td>26 July 2022</td>
                      <td>26 July 2022</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Semester II Lecture Begin</td>
                      <td>
                        31 JULY 2022 (JB) <br />
                        1 AUGUST 2022 (KL)
                      </td>
                      <td>
                        31 JULY 2022 (JB) <br />
                        1 AUGUST 2022 (KL)
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>

          <v-row class="mt-16" id="form_faq">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                填写表格疑问
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    1. No. Pendaftaran / Program 要填什么？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    No. Pendaftaran是Surat
                    tawaran上面的Matrik，Program呢就是你拿到的科系（例如：Diploma
                    in Civil Engineering），Kod Program 也可以查询Surat
                    tawaran上的Program。 <br />

                    <v-simple-table>
                      <thead>
                        <tr>
                          <th>Diploma Program</th>
                          <th class="text-center">Program Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th colspan="2" class="text-center">
                            Department of Engineering
                          </th>
                        </tr>
                        <tr v-for="item in engineering" :key="item.program">
                          <td>{{ item.program }}</td>
                          <td class="text-center">{{ item.code }}</td>
                        </tr>
                        <tr>
                          <th colspan="2" class="text-center">
                            Department of Management
                          </th>
                        </tr>
                        <tr v-for="item in management" :key="item.program">
                          <td>{{ item.program }}</td>
                          <td class="text-center">{{ item.code }}</td>
                        </tr>
                        <tr>
                          <th colspan="2" class="text-center">
                            Department of Geomatic and Built Environment
                          </th>
                        </tr>
                        <tr v-for="item in geomatic" :key="item.program">
                          <td>{{ item.program }}</td>
                          <td class="text-center">{{ item.code }}</td>
                        </tr>
                        <tr>
                          <th colspan="2" class="text-center">
                            Department of Computer Science and Service
                          </th>
                        </tr>
                        <tr v-for="item in computing" :key="item.program">
                          <td>{{ item.program }}</td>
                          <td class="text-center">{{ item.code }}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    2. Tinggi / Kumpulan darah 如果我不知道的话可以空着吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    血型不懂可以先空着。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    3. Agregat / Pangkat 要填什么？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Agregat和Pangkat不需要填哦。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    4. Penjamin可以放父母/亲戚（跟Saudara pertama &
                    kedua一样）吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Penjamin
                    可以放父母也可以放符合条件的亲戚，条件为每月收入至少RM500或以上（但需注意Saudara
                    pertama & kedua需要填写父母以外可以第一时间联络到的人）。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    5. 如果RM10的setem hasil完了，我可以用两张RM5的setem
                    hasil代替吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    可以，但是要注意黏上去时候2张setem hasil没有重叠到。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    6. 哪里可以matikan setem？UTC可以吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    UTC已经不能matikan setem
                    了，必须去LHDN。此外，Pahang的Pejabat Tanah也可以matikan
                    setem。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    7. 如果我本人没有去而是请朋友帮我matikan setem可以吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    不可以哦，因为matikan
                    setem时候需要填写个人资料，建议是亲自去。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    8. Setem hasil要去哪里买？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    可以到Pejabat Pos购买或是直接在Lembaga Hasil Dalam Negeri
                    (LHDN) 买了然后matikan
                    setem。（注意：申请PTPTN时候也需要Setem
                    hasil，但是需要官员到校亲自matikan
                    setem，建议事先买了保存收好）
                    <ul>
                      <li>
                        即日起LHDN已经废除以下的样子的Setem Hasil，以Sijil
                        Setem来代替了，仍然可以使用于Borang 3a跟3b哦
                      </li>
                      <li>PTPTN的setem hasil建议在Pos Malaysia购买。</li>
                    </ul>
                    <br />
                    <v-row>
                      <v-col md="2">
                        <v-row>
                          <v-img
                            src="../assets/setem1.png"
                            max-width="132"
                            class="ml-2 ml-md-7"
                          ></v-img>
                        </v-row>
                        <v-row> Pos Malaysia的Setem Hasil </v-row>
                      </v-col>

                      <v-col md="2">
                        <v-row>
                          <v-img
                            src="../assets/setem2.png"
                            max-width="112"
                            class="ml-3"
                          ></v-img>
                        </v-row>
                        <v-row> LHDN的Setem Hasil </v-row>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    9. 我需要准备多少张RM10的setem hasil呢？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    总共是4张（若没有申请PTPTN，只需2张） <br />
                    a. 2张贴在Borang 3a & 3b，需要自己到LHDN去matikan setem
                    <br />
                    b. 2张准备给PTPTN，不需要matikan setem否则就作废了
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    10. 我的父母退休了/没有工作，请问需要填写Borang Pengesahan
                    Pendapatan吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    需要填写Borang Pengesahan
                    Pendapatan，薪水则填写RM0。若是退休的公务员，每个月都会有一份报告单，可以用来作为证明。而如果是家里母亲为家庭主妇的话，则不需要填这个borang。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    11. 请问我可以找谁sahkan我的borang和文件？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    最方便的是寻找（政府）学校的校长/副校长，如果他们都不在可以询问任何主任是否适合并且愿意帮忙。（若学校行政因Covid-19受影响而关闭的话，建议寻找您区域的州/国议员，帮你sah）
                    <br />
                    <ol type="a" start="3">
                      <li>
                        sah文件副本可以找Pengetua/ Guru Besar, Pegawai Kerajaan
                        Kumpulan 1, Wakil Rakyat, Jaksa Pendamai (JP), Ketua
                        Jajahan, Ketua Bahagian atau Ketua Kampung.
                      </li>
                      <li>
                        签Penjamin的Borang可以找Wakil Rakyat, Jaksa Pendamai,
                        Pegawai Kerajaan Bahagian 1, Pengetua/Guru Besar, Ketua
                        Jajahan, Ketua Bahagian dan Ketua Kampung.
                      </li>
                      <li>
                        而Borang Pengesahan Pendapatan有注明需要Pengetua, Guru
                        Besar Sekolah (Sekolah Kerajaan sahaja), Penghulu,
                        Penggawa, Tuai Rumah, Ketua Kaum atau Mukim Bertauliah,
                        Pegawai Kerajaan Kumpulan Pengurusan dan Profesional
                        (dahulunya Kumpulan A), Pengamal Undang-Undang,
                        Pesuruhjaya Sumpah, Jaksa Pendamai atau Ahli Majlis
                        Mesyuarat Negeri (Ahli EXCO).
                      </li>
                    </ol>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    12. Borang UTM P5 里面的 Bahagian A1 第26项 Alamat Semasa
                    Pengajian要填吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    不需要哦，除非大学期间不住在校内宿舍。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    13.
                    我印出来了才发现我有填错东西，我需要重新印过还是可以用correction
                    tape修改吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    如果发现表格有需要修改的地方，建议使用红笔做出更改就好。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    14. 请问我需要用70gsm还是80gsm的纸复印我的文件呢？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    没有特别要求需要用哪一种纸哦，但是建议使用80gsm的纸打印重要文件，以防呈交时文件受损。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    15. 有什么borang是需要印3份出来的吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    建议根据校方给的Set Tawaran Kemasukan来打印和复印。
                    <v-img
                      src="../assets/diploma_brg.png"
                      max-width="930"
                    ></v-img>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    16. 有什么文件是需要sahkan的？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <ol type="a">
                      <li>Salinan Sijil SPM (3 Salinan)</li>
                      <li>Salinan Sijil Berhenti Sekolah (3 Salinan)</li>
                      <li>
                        Salinan Kad OKU <i>(jika berkaitan)</i> (3 Salinan)
                      </li>
                      <li>Salinan Surat Beranak Pelajar (3 Salinan)</li>
                      <li>
                        Salinan Surat Beranak Ibu Bapa / Penjaga (3 Salinan)
                      </li>
                    </ol>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    17. Borang 要用portrait还是landscape来打印？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    使用portrait来打印哦。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    18. 请问薪水单是有指定要最新的吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    是没有注明需要最新的薪水单，但是建议使用最新的哦。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    19. 照片需要多少张呢?什么size的？背景要蓝底还是白底？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    一份Borang
                    P5需要一张。为了避免日后申请其他事项需要用到，可以准备多几张预备着。根据Borang
                    P5的要求是passport size的，只可以使用白底。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    20. Penjamin需要薪水单吗？（注意:
                    Penjamin需要至少500或以上个的收入才能当penjamin）
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Penjamin不需要薪水单哦，他们是作为你在utm读书期间的担保人，需要担保你在读书期间有办法偿还学费以及其他费用。校方若在处理费用方面出了问题将会联系这两位担保人。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    21. 请问下Borang 3a & 3b
                    如果penjamin的房子贷款还没付完，就不算自己的所以不需要写进去是吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    其实是可以写进去的，因为很多人的房子都是在贷款。虽然说是在贷款，但是名义上房子已经属于自己的了，只是和银行借钱。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    22. 如果工作没有kwsp的话，gaji bersih和jumlah
                    pendapatan可以写一样的吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    可以。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    23. 那个照片我可以自己拍吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    建议到外面的照相馆拍，记得要穿formal或者有领的整齐衣服。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    24. Nama majikan 是写公司名字还是老板的名字？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <ol type="a">
                      <li>Alamat Pejabat 公司地址</li>
                      <li>Nama Majikan 雇主名字</li>
                      <li>Alamat Majikan 雇主地址</li>
                    </ol>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    25. Borang P5里面需要我填写银行名字以及户口号码，请问一下UTM
                    Diploma的Panel Bank是什么银行？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-simple-table>
                      <thead>
                        <tr>
                          <th>Campus</th>
                          <th>Panel Bank Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in panels" :key="item.campus">
                          <td>{{ item.campus }}</td>
                          <td>{{ item.panel }}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                    <span class="font-weight-bold"
                      >只可以开设学校官方指定户口，学校只限制Panel
                      Bank的交易！</span
                    >
                    <br />
                    <span class="font-weight-bold red--text"
                      >PTPTN的银行户口是强制性的，必须在学校指定的银行开户，不可以使用其他银行的户口来申请PTPTN！！！(PTPTN的指定银行为CIMB
                      Bank Berhad)</span
                    >
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    26.
                    我现在没有任何个人名字银行户口，可是我有与父母的联名户口，请问可以用吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    如果是联名户口，建议把他分出来成个人户口或者开设一个新的个人户口，因为当UTM需要退款的时候，必须核实到时学生的名字方可继续处理，<span
                      class="font-weight-bold"
                      >若没有将会有所耽搁或者照成退款失败。<span class="red white--text"
                        >（如果你还没有过生日，一样可以开户！只是银行账户会限定交易额度，这个额度可以在生日后到银行更新。）</span
                      ></span
                    >
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    27. 我还没开户，需要带什么到银行开户？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    需要开户的东西如下：（有分18岁以上或者18岁以下，年龄以生日日期为准）
                    <v-simple-table>
                      <thead>
                        <tr>
                          <th>18岁以上</th>
                          <th>18岁以下</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>RM100或以上</td>
                          <td>RM100或以上</td>
                        </tr>
                        <tr>
                          <td>Offer Letter/Surat Kebenaran</td>
                          <td>Offer Letter/Surat Kebenaran</td>
                        </tr>
                        <tr>
                          <td>-</td>
                          <td>报生纸（Sijil Kelahiran/Birth Certificate）</td>
                        </tr>
                        <tr>
                          <td>-</td>
                          <td>任何一位父母（需要帮忙签名）</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    28. 有没有任何的Borang Set Tawaran Kemasukan的sample？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    有，可以参考由校方提供的指南：<a
                      href="https://drive.google.com/file/d/1CO_oLIP7JPehOollgUmHsSLRO2qRV4MG/view?usp=sharing"
                      target="_blank"
                      class="red--text"
                      >PANDUAN MENGISI BORANG SET TAWARAN KEMASUKAN</a
                    >
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>

          <v-row class="mt-16" id="class_faq">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                日常上课疑问
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    1. idp生是和mainstream生一起上课的还是分开？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    两者是一起上课的哦。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    2. 上课和考试时候是用什么语言啊？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    除了部分大专必修科（University General
                    Course），其他科目考试时候一定是用英文或者双语。上课的话是根据
                    lecturer，教材会使用英文，但是同时也会用国文作为辅助。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    3. 上课的衣服有什么要求吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    最基本是有领的短袖上衣，长裤和包鞋。另外，校方有规定过星期一是formal
                    wear。 <br />
                    <v-img
                      src="../assets/tatacara_berpakaian.jpg"
                      max-width="1811"
                    ></v-img>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    4.
                    上课有需要准备些什么standard的簿子或是textpad吗？还是多数用电脑？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    可以自备簿子或者白纸方便记录资料，教学的讲义和内容都需要根据lecturer，有的会给softcopy让我们自行打印（例如PowerPoint）有的则是要求需要用指定的书本。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    5. Johor的周末是在星期五和六吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    是的，所以星期五和六是没有上课的，除非教授要求。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    6. 请问diploma的文凭是utm的还是utmspace自己的？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    文凭一样是utm的，只是课程是由UTMSpace在管理，而UTMSpace是
                    UTM 的其中一个faculty。
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>

          <v-row class="mt-16" id="fee_faq">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                学费疑问
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    1. 听说如果diploma CGPA 4.0的话，degree就可以免学费？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    对的，不论是通过什么入学管道进入，只要是4.00的话degree第一年第一学期的学费就不需要还（只免学费yuran
                    pelajaran，并不包括其他杂费例如：yuran perkhidmatan以及yuran
                    asrama）。但是如果你在第一年的第一学期没有考到4.0那么接下来就不能免学费了。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    2. 学费表怎么看？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    以下是Diploma学费表的中文翻译版本：
                    <v-img
                      src="../assets/diploma_fee.png"
                      max-width="1137"
                    ></v-img>
                    <br />
                    Diploma新生费用总结（7月26报到前需要付清的）： <br />
                    <ol>
                      <li>拿到录取信后2星期内给 RM300 BMK</li>
                      <li>RM1300 报名费</li>
                      <li>RM1000 学费</li>
                      <li>RM650 杂费</li>
                      <li>RM200 住宿费</li>
                    </ol>
                    <br class="mt-3" />
                    Diploma新生报到后需要付清的剩下的学费&住宿费：
                    <ol>
                      <li>8月26前工程系的同学需要交 RM3800 学费</li>
                      <li>8月26前非工程系的同学需要交 RM3480 学费</li>
                      <li>8月26前建筑系的同学需要交 RM4376 学费</li>
                      <li>10月7前给 RM1000 住宿费</li>
                    </ol>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>

          <v-row class="mt-16" id="course_faq">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                科系问题
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    1. 读完utm diploma后可以转到其他大专的degree吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    可以的，如果要转至其他公立大专需要通过upu并且是以diploma
                    ipta的资格申请，upu会给你8个选项填，次序排列也根据你喜欢科目，比较想读科系/大专放first
                    choice以此类推。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    2. 读完utm diploma后申请degree需要通过upu吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    读完utm diploma申请进utm
                    degree不需要通过upu，到时校方会给你一个utm
                    diploma生的专属通道直接申请即可（utm diploma申请进utm
                    degree有优先权，当然成绩也要考好），该通道会给你两个选项填
                    (比较喜欢的科目放first choice)。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    3. 为什么utm diploma学费跟私立一样贵？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    因为utmspace属于私立，但同时utmspace也是utm的其中一个faculty；foundation、diploma、、UTM
                    IDP以及半工半读都是由utmspace在管理。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    4. 读完utm diploma后degree需要读多少年？听说可以credit
                    transfer？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    读完utm diploma后degree可以申请credit transfer来skip year
                    1的课程，所以会是3年degree。补充，diploma in architecture 进
                    degree in
                    architecture会是2.5年+2年(architecture的degree原本就是3年加上可以credit
                    transfer一年)
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    5. 读完utm diploma后可以申请utm degree的什么科目？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    能申请的科目可以查看
                    <a
                      href="https://drive.google.com/file/d/1BY80Aw6lINZZDnaZ7g204grf6hMPZdOi/view?usp=sharing"
                      target="_blank"
                      class="red--text"
                      >List of Programme 2022/2023</a
                    >，申请的条件则可以
                    <a
                      href="https://admission.utm.my/entry-requirements-ug-malaysian/"
                      target="_blank"
                      class="red--text"
                      >点击这里</a
                    >
                    参考
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    6. utm diploma跟utm foundation的差别在哪里？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    utm diploma跟utm
                    foundation的差别就在于diploma是3年课程而foundation是1年课程，utm
                    diploma学的东西其实跟degree都差不多一样都是专注在一个科系（这就是为什么可以在degree的时候申请credit
                    transfer），而foundation呢就是跟stpm以及matrikulasi差不多都是散科的。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    7.
                    我在系统申请到了一个科系可是我想换去另一个科系，我应该怎么办？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    你可以联系UTMSpace的招生处通过电邮（<a
                      href="mailto:ambilan@utmspace.edu.my"
                      class="red--text"
                      >ambilan@utmspace.edu.my</a
                    >）或者拨电（0197252856 / 0197348856 / 0197192667 /
                    0195724110），告诉他们你要更换科系即可。请记得在工作时间联络他们
                    SUNDAY : 8:00 am – 3:30 pm, MON – THUR : 8:00 am – 5:00 pm。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    8. UTM Diploma会难读吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    难不难读其实只要对该科系有兴趣，有专心听课都不会觉得难。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    9.
                    如果我Diploma读到一半了，我拿到Matriculation/PISMP/UPU的offer，我可以退学吗？学费会不会退回？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    你当然可以申请退学，学费的话需要看你读了多久方可决定是否会退回，退回的百分比如下：
                    <br />
                    <p class="font-weight-bold text-center">
                      期限与会被征收的学费百分比
                    </p>
                    <v-simple-table>
                      <thead>
                        <tr>
                          <th>期限</th>
                          <th>服务费</th>
                          <th>学费</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>第1个星期到第4个星期之间</td>
                          <td>100%</td>
                          <td>50%</td>
                        </tr>
                        <tr>
                          <td>第5个星期到第9个星期之间</td>
                          <td>100%</td>
                          <td>75%</td>
                        </tr>
                        <tr>
                          <td>第9个星期之后</td>
                          <td>100%</td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                    <ul>
                      <li>欠缺的学费必须从退学申请批准信发出的30天内缴清。</li>
                      <li>
                        若有多余的学费将会在30天内退还当调整工作已经完成。
                      </li>
                      <li>
                        以上皆为翻译版，一切以原文版为准。 （原文：
                        <a
                          class="red--text"
                          href="https://studentdiploma.utmspace.edu.my/wp-content/uploads/2020/06/Buku-Panduan-Kewangan-Edisi-3_2020.pdf"
                          target="_blank"
                          >Buku Panduan Kewangan Program Diploma Sepenuh Masa</a
                        >）
                      </li>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    10. UTM diploma受MQA承认的吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    对的，可以到
                    <a
                      href="https://www2.mqa.gov.my/mqr/english/eiptaKPList.cfm?IDAkrIPTS=261"
                      target="_blank"
                      class="red--text"
                      >MQA官方的UTM课程</a
                    >
                    查看。
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>

          <v-row class="mt-16" id="scolarship_faq">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                奖贷学金
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    1. Utmspace diploma有什么奖学金可以申请吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    由于UTM的Diploma课程是UTMSpace开办的所以政府不会给津贴，但是可以到
                    <a
                      href="https://www.biasiswamalaysia.com/"
                      target="_blank"
                      class="red--text"
                      >Biasiswa Malaysia</a
                    >
                    了解或者上网寻找其他奖贷学金。同时要记得先查看条款和条件是否符合。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    2. Diploma可以申请ptptn吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    可以的，详情可以到
                    <a
                      href="http://space.utm.my/studentaffairs/bantuan-penajaan/"
                      target="_blank"
                      class="red--text"
                      >Bantuan Penajaan dan Bantuan Kewangan</a
                    >
                    了解。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    3. SSPN-i是什么来的？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    SSPN-i是国民教育储蓄基金，简单来说就是一个储蓄户口。申请ptptn的同学都需要先开一个sspn-i的户口，因为这个户口号码是申请PTPTN的条件之一。
                    <br />
                    开户链接： <br />
                    <a
                      href="https://www.ptptn.gov.my/esmas-open-acc-web/#/openAccount"
                      class="red--text"
                      target="_blank"
                      >https://www.ptptn.gov.my/esmas-open-acc-web/#/openAccount</a
                    >
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>

          <v-row class="mt-16" id="hostel_faq">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                宿舍问题
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    1. Utm有巴士从宿舍去学校吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    UTMJB和UTMKL
                    都有提供巴士让学生从自己的宿舍去到上课的地方，但是因为UTMKL的campus不是很大所以校内就没有提供巴士服务，只需步行即可。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    2. 每间宿舍都是一样的格局吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    对的，UTM 的宿舍是双人房
                    (有2张床，2个橱，2张书桌，2张椅子，一盏风扇)。 不过UTM
                    JB宿舍的厕所是大家共用的，而UTM
                    KL的是两间房间共用一个厕所，所以厕所需要自行清洗。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    3. 宿舍有wifi吗？要还钱的吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    UTM 有提供公用wifi，是免费的。但是需要在同学入学之后使用UTM
                    id 和password
                    才能使用。但是每天wifi都会重置，需要每天重新登录！有些网站也会受到限制，不可以浏览。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    4. 宿舍里面可以煮东西吗？煮水的话嘞？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    UTM
                    的宿舍是不允许煮食物的；同学可以在宿舍煮水，需自行准备煮水的电器并在报到时缴付电器的费用。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    5. Diploma 第一年可以不住宿舍吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    可以的，不过由于第一年是校方鼓励新生住宿舍的所以如果不想住学校提供的宿舍需要另外申请，否则会算你宿舍费。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    6. 宿舍可以一个人居住的吗？多少钱？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    校方提供给学生的宿舍都是默认为双人房的，如果要选择单人房的话需要向校方申请并且提供合理的原因，再看校方是否通过哦。一个人居住则每学期需付RM1600。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    7. 房间有hair dryer吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    房间只有床单，书桌，椅子，其余的都需要自备。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    8.
                    第一天去宿舍时候要自备垃圾桶，扫把，畚斗那些的打扫用具吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    可以自备，也可以选择当天在学校才去附近购买，如果是UTM
                    KL的话宿舍内有杂货店可以买。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    9. 可以带小冰箱吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    不能，因为被发现的话是会被罚款甚至有可能被充公的。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    10. 房间里面有问题比如灯坏掉还是插座不能用的话怎么办？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    可以通知宿舍的管理员，他们会尽量在几天内来帮你处理好。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    11. 我在房间里面的话可以穿短裤吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    可以，只要不是在宿舍外面的范围走动。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    12. 可以选择自己要住的宿舍吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    这点没办法哦，因为都是校方的安排。但是学校会尽量安排学生住在靠近上课地点的宿舍。2019/2020的时候是UTM
                    JB的diploma男生是居住在
                    <a
                      href="https://goo.gl/maps/KhnNrzoTXDf11yQ2A"
                      target="_blank"
                      class="red--text"
                      >Kolej Rahman Putra (KRP)</a
                    >
                    ，而女生则在
                    <a
                      href="https://goo.gl/maps/7JJAfSuyf2rf9YSs7"
                      target="_blank"
                      class="red--text"
                    >
                      Kolej Tun Fatimah (KTF)</a
                    >。后来新的一届女生则在
                    <a
                      href="https://goo.gl/maps/r3QgvTYx5g3jHXxNA"
                      target="_blank"
                      class="red--text"
                      >Kolej 9 (K9)</a
                    >
                    ，男生在
                    <a
                      href="https://goo.gl/maps/vkv9bCMca9rUVSMF9"
                      target="_blank"
                      class="red--text"
                      >Kolej 10 (K10)</a
                    >。UTM KL的话只有一间宿舍，就是
                    <a
                      href="https://goo.gl/maps/2FSXyUio9B3LbuhCA"
                      target="_blank"
                      class="red--text"
                      >Kolej Kediaman Siswa Jaya (KSJ)</a
                    >
                    ，UTM KL的宿舍有3个blok，blok A是女生，blok
                    B是男女（男女不同层），blok
                    C则是男生，而diploma生会安排在blok A以及blok C居住。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    13. 我可以申请跟朋友一起住吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    根据学校的规定，是无法选择自己的宿舍和室友的。但是，报到当天的时候可以和朋友一起到柜台尝试申请一起住（必须在入住前）。补充，通常校方都会尽量安排学生和同种族的一起，所以别太担心。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    14. UTM KL的男女宿舍长怎样的？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    男女宿舍格局都一样，卫生间都在房内的（非常感谢
                    <a
                      href="https://www.facebook.com/pmbutmkl"
                      target="_blank"
                      class="red--text"
                      >马来西亚工艺大学吉隆坡分校佛学会（华文学会）</a
                    >
                    提供照片）：
                    <v-img
                      src="../assets/ksj_room.jpg"
                      max-width="1080"
                    ></v-img>
                    <v-img
                      src="../assets/ksj_toilet.jpg"
                      max-width="1080"
                    ></v-img>
                    <v-img
                      src="../assets/ksj_pantry.jpg"
                      max-width="1080"
                    ></v-img>
                    <v-img
                      src="../assets/ksj_washing.jpg"
                      max-width="1080"
                    ></v-img>
                    <v-img
                      src="../assets/ksj_laundry.jpg"
                      max-width="1080"
                    ></v-img>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    15. UTM Skudai的男女宿舍长怎样的？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p class="text-decoration-underline text-center title">
                      <v-icon color="blue">mdi-gender-male</v-icon>
                      男宿舍
                    </p>
                    <v-row>
                      <v-col>
                        <v-img
                          src="../assets/k10a.jpg"
                          max-width="960"
                          class="mx-auto"
                        ></v-img>
                      </v-col>
                      <v-col>
                        <v-img src="../assets/k10b.jpg" max-width="684"></v-img>
                      </v-col>
                      <v-col>
                        <v-img src="../assets/k10c.jpg" max-width="684"></v-img>
                      </v-col>
                      <v-col>
                        <v-img src="../assets/k10d.jpg" max-width="684"></v-img>
                      </v-col>
                      <v-col>
                        <v-img src="../assets/k10e.jpg" max-width="684"></v-img>
                      </v-col>
                      <v-col>
                        <v-img
                          src="../assets/k10f.jpg"
                          max-width="684"
                          class="mx-auto"
                        ></v-img>
                      </v-col>
                    </v-row>

                    <p class="text-decoration-underline text-center title mt-8">
                      <v-icon color="pink">mdi-gender-female</v-icon>
                      女宿舍
                    </p>
                    <v-row>
                      <v-col md="6">
                        <v-img src="../assets/k9a.jpg" max-width="1440"></v-img>
                      </v-col>
                      <v-col md="6">
                        <v-img src="../assets/k9b.jpg" max-width="1440"></v-img>
                      </v-col>
                      <v-col md="6">
                        <v-img src="../assets/k9d.jpg" max-width="1440"></v-img>
                      </v-col>
                      <v-col md="6">
                        <v-img src="../assets/k9e.jpg" max-width="1440"></v-img>
                      </v-col>
                      <v-col md="6">
                        <v-img src="../assets/k9f.jpg" max-width="1200"></v-img>
                      </v-col>
                      <v-col md="6">
                        <v-img src="../assets/k9g.jpg" max-width="1200"></v-img>
                      </v-col>
                      <v-col md="6">
                        <v-img src="../assets/k9c.jpg" max-width="1200"></v-img>
                      </v-col>
                      <v-col md="6">
                        <v-img src="../assets/k9h.jpg" max-width="1200"></v-img>
                      </v-col>
                      <v-col>
                        <v-img
                          src="../assets/k9i.jpg"
                          max-width="1440"
                          class="mx-auto"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    16. K9 K10附近有什么设施？交通方便吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5363.02440109997!2d103.64687812969346!3d1.55936916772616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da715a37183d8d%3A0x463ebbe956cfae7a!2sKolej%209!5e1!3m2!1sen!2smy!4v1654337652040!5m2!1sen!2smy"
                          width="600"
                          height="450"
                          style="border: 0"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                          class="hidden-sm-and-down"
                        ></iframe>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5363.02440109997!2d103.64687812969346!3d1.55936916772616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da715a37183d8d%3A0x463ebbe956cfae7a!2sKolej%209!5e1!3m2!1sen!2smy!4v1654337652040!5m2!1sen!2smy"
                          style="border: 0"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                          class="hidden-md-and-up"
                        ></iframe>
                      </v-col>
                      <v-col>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9835.827248892432!2d103.6438532137106!3d1.5599397871402423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da715aed42d841%3A0xbb59b7e68940329c!2sKolej%2010%2C%20UTM%20Skudai!5e1!3m2!1sen!2smy!4v1654337707575!5m2!1sen!2smy"
                          width="600"
                          height="450"
                          style="border: 0"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                          class="hidden-sm-and-down"
                        ></iframe>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9835.827248892432!2d103.6438532137106!3d1.5599397871402423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da715aed42d841%3A0xbb59b7e68940329c!2sKolej%2010%2C%20UTM%20Skudai!5e1!3m2!1sen!2smy!4v1654337707575!5m2!1sen!2smy"
                          style="border: 0"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                          class="hidden-md-and-up"
                        ></iframe>
                      </v-col>
                    </v-row>
                    <v-row>
                      K9
                      K10区域非常靠近食堂以及篮球场、羽毛球场、足球场，而且宿舍外面就有巴士站载学生到新的图书馆以及上课的地方。此外，也会载学生到inbound范围，也就是KRP,
                      KTDI区域。
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    17. KSJ在哪里？离campus远吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4912.128724072967!2d101.7296222!3d3.1868624999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc378ad556bffb%3A0x9311d7bda7d09682!2sKolej%20Kediaman%20Siswa%20Jaya!5e1!3m2!1sen!2smy!4v1656923869779!5m2!1sen!2smy"
                      width="600"
                      height="450"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      class="hidden-sm-and-down"
                    ></iframe>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4912.128724072967!2d101.7296222!3d3.1868624999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc378ad556bffb%3A0x9311d7bda7d09682!2sKolej%20Kediaman%20Siswa%20Jaya!5e1!3m2!1sen!2smy!4v1656923869779!5m2!1sen!2smy"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      class="hidden-md-and-up"
                    ></iframe>
                    <br class="mt-3" />
                    离campus不远，不jam的话5分钟左右就能到达。
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>

          <v-row class="mt-16" id="environment_faq">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                校内&校外环境与生活问题
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    1. Utm里面有什么特别的设施？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    校内有泳池，体育场、篮球场等等还有各式各样的地方等待你自己去探索~
                    <br />
                    UTM Skudai 宿舍短片：
                    <v-row>
                      <v-col>
                        <iframe
                          class="hidden-sm-and-down"
                          width="560"
                          height="315"
                          src="https://www.youtube-nocookie.com/embed/JT7LedfgX1Q"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <iframe
                          class="hidden-md-and-up"
                          src="https://www.youtube-nocookie.com/embed/JT7LedfgX1Q"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        UTM KL宿舍Kolej Siswa Jaya(KSJ)简介： <br />
                        <a
                          class="red--text"
                          href="https://www.facebook.com/pmbutmkl/posts/480081150410035"
                          target="_blank"
                          >Part 1</a
                        >，<a
                          class="red--text"
                          href="https://www.facebook.com/pmbutmkl/posts/480698553681628"
                          target="_blank"
                          >Part 2</a
                        >，<a
                          class="red--text"
                          href="https://www.facebook.com/pmbutmkl/posts/481342093617274"
                          target="_blank"
                          >Part 3</a
                        >
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    2. 学校附近有market吗？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    >UTM KL校内有
                    <a
                      href="https://goo.gl/maps/8NLWtfKBQbuPji388"
                      class="red--text"
                      target="_blank"
                      >Gurney mall</a
                    >，mall里面同时也有公寓（最便宜的配套是RM1100，2张单人床，冷气，清理服务，wifi，泳池；详细的可以到
                    <a
                      href="https://www.instagram.com/residensiutmkl.official/"
                      class="red--text"
                      target="_blank"
                      >Residensi UTM KL</a
                    >
                    查看）。UTMJB 附近有
                    market让同学购买日常用品。此外，校内也有杂货店方便学生购买必需品。
                    <br class="mb-3" />
                    Gurney Mall简介短片：<br />
                    <iframe
                      class="hidden-sm-and-down"
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/Ck9nc0fAY58"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <iframe
                      class="hidden-md-and-up"
                      src="https://www.youtube-nocookie.com/embed/Ck9nc0fAY58"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    3. 通常生活费是多少？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    生活费是偏向于个人的，校内的食物选择琳琅满目，价钱平均为RM5一餐。另外还需要考虑买书本、文具、复印教材的费用、和其他生活娱乐之类的。一个月的生活费建议准备至少RM500。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    4.
                    那么你们是去哪里洗衣服的？洗了晒在哪里？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    UTM JB：<br />
                    除了可以选择手洗，大部分宿舍内也有提供洗衣机。校内也有提供自助自已的dobi，dobi内也有烘干机。宿舍外面通常都会有一个晒衣服的地方，如果不放心的话也可以选择晒在自己房间，但是需要自备架子或绳子。
                    <br class="mt-3" />
                    UTM KL：<br />
                    除了可以选择手洗，宿舍内每一层也有提供洗衣机。宿舍附近也有dobi洗衣店，dobi内也有烘干机。宿舍每一层都会有一个晾衣服的地方，如果不放心的话也可以选择晒在自己房间，但是需要自备架子或绳子。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header
                    >5. 校内有华人餐吗？校外的话会难找吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    UTM JB：<br />
                    校内有华人素食。同时也可以选择乘坐Grab或巴士到校外附近的Taman
                    U。或者是用Food Panda选择叫Delivery，和校外的华人餐厅外卖。
                    <br class="mt-3" />
                    UTM KL：<br />
                    校内没有华人餐，但是宿舍附近则有很多华人餐（出了宿舍门右转可以到有华人档的food
                    court，左转可以到华人餐馆，直走可以到巴士站并且搭T251号的巴士去你想去的地方）。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    6. 宿舍里面有饮水机吗？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    UTMJB的话，在步行可到的范围内，宿舍和上课的地方附近都会有饮水机，但是需注意有些饮水机需要收零钱而有些则是免费的。而UTMKL的宿舍内，每隔一楼层都会有一台小饮水机（免费的），大饮水机则在篮球场旁边（需要付零钱的）。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    7.
                    宿舍的房间有电风扇是吗？然后tilam不用带对吗？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    >宿舍提供的风扇是安装在天花板的吊扇哦。而tilam则是不需要带的因为宿舍是有提供床褥的，如果同学觉得有需要的话也是可以带的。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    8. UTM JB的公交设施如何？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    >B 呢有Bus Muafakat
                    Johor正在运行，负责载送居民到达目的地。车费呢是一人一年RM10，必须申请专属的BMJ
                    Kad，在2021年，BMJ为了推动到柔佛旅游计划，手持大马卡的马来西亚公民可以以身份证上车，无需任何费用。BMJ也有一辆巴士进入UTM
                    JB区域载送学生出校等等（目前MCO期间，无法确定是否照常入内）
                    <br /><br />
                    除了BMJ之外，JB也有Causewaylink以及众多巴士公司在市区里面载送，车费不详，需要根据你的目的地付费，并且只可以使用现金付费。
                    <br />
                    <a
                      href="https://drive.google.com/drive/folders/1P6zVO0e_CXz0S9OBWoQ8smv0eKRv7KDr?usp=sharing"
                      target="_blank"
                      class="red--text"
                      >点击我查看路线</a
                    >
                    <br /><br />
                    <p class="red--text font-weight-bold">
                      *如果要查看任何关于P211的时间以及路线的话，请下载LUGO或者使用Google
                      Map
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header
                    >9.
                    如果我家住靠近学校或者我是住外面的话，需要怎样搭公共交通到学校呢？本题为UTM
                    KL分校问题）</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    UTM KL路线： <br /><br />
                    路线一 <br />
                    搭LRT去到
                    <span class="red white--text">Dato Keramat</span>
                    然后在那里等个
                    <span class="red white--text">220号</span>
                    的巴士并搭上，220号巴士有一站会<span class="red white--text"
                      >停在UTM KL大门对面的巴士站</span
                    >。 <br /><br />
                    路线二 <br />
                    若不太想等巴士，也可以搭 LRT 去到
                    <span class="red white--text">Damai</span>
                    然后走个大约15分钟就能到达UTM KL的Gurney Mall（校内的Mall）
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>

          <v-row class="mt-16" id="degree_faq">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                往后升学
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    1. 读了utm diploma过后可以去别的大学读degree吗？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    可以通过UPU申请去到其他的大专（例如：UM，UPM，USM，UKM，UMP，UTEM，UTHM，UNIMAP
                    等等）就读学士课程。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    2. 我们读完了，想要报读自己喜欢的科系，进main
                    stream是通过upu，还是还有一个管道直接进main stream？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    即将读完utm diploma后校方会提供一个网站给学生申请utm
                    degree。而根据以往的经验，如果foundation的成绩在3.50或以上的话utm会直接offer学生在main
                    stream
                    degree升学，但是最终决定还是需要取决于校方。如果没有3.50也不用担心，因为utm
                    diploma的成绩也可以用在upu申请其他大专的degree课程。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    3. 通过UTM
                    Diploma的专属通道申请的话，有什么科系是我可以申请的呢？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    大部分科系都可以申请，详细的参阅以下列表:
                    <br />
                    <a
                      href="https://drive.google.com/file/d/1BY80Aw6lINZZDnaZ7g204grf6hMPZdOi/view?usp=sharing"
                      target="_blank"
                      class="red--text"
                      >List of Programme 2022/2023</a
                    >
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    4. 我读了UTM Diploma，是不是只可以申请IDP？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    完全不正确，在你读到year
                    3的的时候，UTM的招生处会通知并且给你们讲座。到时候，UTM会提供特别通道给你们申请进入UTM
                    mainstream degree。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    5. 我想问下，比如说utm
                    diploma的学生跟其他管道进的相比会有在选择科系上的优势，那请问utm
                    diploma是不是也有这种优势呢？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    在utm
                    diploma课程将要结束时，utmspace会先开放utm的degree课程给utm
                    diploma的学生申请，学生可选择其中两个科系。而可选择的科系校方会根据学生自身读者的课程去进行过滤。utm也有说明会优先考量utm
                    diploma的学生。
                    <br />
                    录取过程如下： <br />
                    UTM Diploma → （剩余的位置）→ UPU → Matriculation → STPM →
                    Diploma Other Universities → Foundation IPTS
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    6. 请问下读完utm diploma后如果我以International Degree
                    Program (IDP)
                    进入就读degree和通过mainstream的进入会有什么不一样呢？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    两者的差别是在于费用以及门槛哦IDP门槛偏低一些，平时上课是一起的。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    7. IDP 和mainstream的degree有什么差别？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    IDP
                    degree是utm自主录取学生，而mainstream的degree则是通过upu也就是国家高等教育局来录取学生的。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    8. 我在Foundation的时候是拿Life
                    Science的，请问我在申请mainstream的时候是不是只可以到有Biology的mainstream科目？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    这种说法是错的，Computer science的科目仍然符合到其他UTM
                    Mainstream课程的录取指标。举例来说，Matematik或者Fizik或者Kimia的录取资格是接受使用任何科系的diploma，只要该degree科系的入取条件当中没有自定一个科系才可以申请的话任何utm
                    diploma科系的学生都可以申请，但是会因为diploma的科系和degree的恶习不一样导致不能申请credit
                    transfer。
                    <br />
                    各个科目的录取门槛可以参考这边：<a
                      href="https://admission.utm.my/entry-requirements-ug-malaysian/"
                      target="_blank"
                      class="red--text"
                      >Syarat Kemasukan ke UTM Degree</a
                    >
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    9. 我看到入学门槛表里面有写着需要MUET Band
                    2或以上才可以拿到offer，请问我们如何考MUET？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    UTM
                    Space会帮忙学生在degree之前考MUET，费用呢大约是RM350-RM400之间，这笔费用里面包括UTM
                    Space给予的MUET的补习班。如果你已经自己考过MUET的话，并且你的MUET成绩还在有效期的话，你可以直接凭着该成绩申请degree
                    Mainstream课程。 <br />
                    <span class="font-weight-bold"
                      >建议学生们自己报考MUET，因为自己报考MUET可以比较便宜而且可以自己选择考场，不需要支付昂贵的考试费。（只是不会给予补习班，需要自习）</span
                    >
                    <br />
                    <span class="font-weight-bold"
                      >Normal Fee: MUET : RM101 / MOD: RM250</span
                    >
                    <br />
                    <span class="font-weight-bold"
                      >MUET :Register online and make payment during
                      registration.</span
                    >
                    <br />
                    <span class="font-weight-bold"
                      >MoD: Register online and make payment after
                      registration.</span
                    >
                    <v-img src="../assets/muet.png" max-width="1453"></v-img>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>

          <v-row class="mt-16" id="upu_faq">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                UPU申请问题
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    1. 如果我想要使用UTM
                    Diploma成绩来申请UPU的话，我需要在Kategori跟Lepasan填写什么？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Program Pengajian: Lepasan STPM / Setaraf
                    <br />
                    Lepasan: Diploma Universiti Awam
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    2. 在Maklumat Akademik的部分，Tarikh Tamat Pengajian填几时？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Tarikh Tamat Pengajian必须询问老师，因为每年的日期都不同。
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    3. 在Maklumat Dokumen的，我要怎样upload我的文件？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    你必须根据他所需要的来upload给他，如果有标记 * 号以及"jika
                    berkaitan"的话，但是你没有涉及到的，你可以跳过。 <br />
                    <span class="font-weight-bold"
                      >Dokumen
                      Penting（所有文件上传前都需要给政府官员sahkan）</span
                    >
                    <v-simple-table>
                      <tbody>
                        <tr>
                          <th>Salinan Sijil SPM</th>
                          <td>
                            如果你已经拿到了，可以scan了,
                            upload给他们，若还没，请上传SPM
                            Slip。如果是复印的建议找村长或校长之类的政府官员签名。
                          </td>
                        </tr>
                        <tr>
                          <th>Salinan Sijil MUET</th>
                          <td>
                            如果你已经考取了，请上传你的MUET Certificate,
                            如果还没请放空。如果是复印的建议找村长或校长之类的政府官员签名。
                          </td>
                        </tr>
                        <tr>
                          <th>Salinan Transkrip Penuh / Semester</th>
                          <td>
                            这个需要向Bahagian Pejabat Akademik（UTM KL：<a
                              href="mailto:rahaida@utmspace.edu.my"
                              class="red--text"
                              >rahaida@utmspace.edu.my</a
                            >，UTM JB：<a
                              href="mailto:nurfatin@utmspace.edu.my"
                              class="red--text"
                              >nurfatin@utmspace.edu.my</a
                            >）索取官方成绩单。
                          </td>
                        </tr>
                        <tr>
                          <th>Salinan Diploma / Pengesahan Tamat</th>
                          <td>
                            这个必须向Bahagian Pejabat Akademik（UTM KL：<a
                              href="mailto:rahaida@utmspace.edu.my"
                              class="red--text"
                              >rahaida@utmspace.edu.my</a
                            >，UTM JB：<a
                              href="mailto:nurfatin@utmspace.edu.my"
                              class="red--text"
                              >nurfatin@utmspace.edu.my</a
                            >）索取，前提是你已经完成了diploma课程，如果还没请放空。
                          </td>
                        </tr>
                        <tr>
                          <th>Salinan Sijil MQA</th>
                          <td>
                            这个可以到
                            <a
                              href="https://www2.mqa.gov.my/mqr/english/eiptaKPList.cfm?IDAkrIPTS=261"
                              class="red--text"
                              >MQA官方</a
                            >
                            找然后print出来找村长或校长之类的政府官员签名。
                          </td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    4. 有部分的dokumen我没有upload，我放空，会不会影响到我的UPU
                    Application？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    不会影响到的，因为UPU第一阶段纯粹是开放给你们申请而已，第一阶段结束的几个月后会在开放第二阶段，而第二阶段就是让申请者upload剩下的资料，以确保不会影响到application。
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>

          <v-row class="mt-16" id="dermasiswa_faq">
            <v-col>
              <p class="headline text-center">
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInLeft animate__infinite"
                >
                  mdi-hand-pointing-right</v-icon
                >
                助学金
                <v-icon
                  color="red"
                  class="animate__animated animate__fadeInRight animate__infinite"
                >
                  mdi-hand-pointing-left</v-icon
                >
              </p>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    1. Dermasiswa（助学金）的申请条件有什么呢？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <ol type="a">
                      <li>只开放给UTM Diploma的学生</li>
                      <li>第一学期的CGPA必须3.50以上</li>
                      <li>没有接受任何别的奖学金资助</li>
                      <li>家庭的月收入少于RM4000</li>
                    </ol>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    2. 这个助学金什么时候可以申请呢？要去哪里申请？
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    这个奖学金将在第一学期结束后公开通知申请，截止日期通常会在第二学期开始后的30天内，更确切的日期依校方的公布为准。
                    <br />
                    <span class="font-weight-bold red--text"
                      >目前还未开放申请</span
                    >，有兴趣的同学可以到
                    <a
                      href="http://space.utm.my/studentaffairs/bantuan-penajaan/"
                      target="_blank"
                      class="red--text"
                      >Bantuan Penajaan</a
                    >
                    查看去年开放申请的日期和表格。
                    <br />
                    <ol type="a">
                      <li>申请表格</li>
                      <li>入学时收到的Surat Tawaran (副本)</li>
                      <li>身份证和学生证 (副本)</li>
                      <li>父母/监护人的身份证(副本)</li>
                      <li>
                        父母/监护人的薪水单(副本)
                        <span class="red--text"
                          >**若没有薪水单则须填写Borang Pengesahan
                          Pendapatan</span
                        >
                      </li>
                      <li>第一学期的成绩单(副本)</li>
                    </ol>
                    <br />
                    <span class="font-weight-bold">注意：</span><br />
                    所有的<span class="red--text">副本也需要sahkan</span
                    >哦，可寻找Pengetua, Guru Besar Sekolah (Sekolah Kerajaan
                    sahaja), Penghulu, Penggawa, Tuai Rumah, Ketua Kaum atau
                    Mukim Bertauliah, Pegawai Kerajaan Kumpulan Pengurusan dan
                    Profesional (dahulunya Kumpulan A), Pengamal Undang-undang,
                    Pesuruhjaya Sumpah, Jaksa Pendamai atau Ahli Majlis
                    Mesyuarat Negeri (Ahli EXCO)。 <br />.
                    <span class="red--text"
                      >第一学期的成绩单只能给General Manager, Centre for Diploma
                      Studies当局来sah。</span
                    >
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    3. 申请了要等多久才知道结果？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    >申请结果会在申请截止日期后30天内公布。成功申请者需自行联络UTMSPACE的奖学金秘书处。</v-expansion-panel-content
                  >
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    4. 成功申请的话会拿到多少津贴呢？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    >津贴金额会在每学期结束时通过校方自行开会决定。根据官方列明，通常是50%的学费。</v-expansion-panel-content
                  >
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    5. Dermasiswa容易申请到吗？</v-expansion-panel-header
                  >
                  <v-expansion-panel-content
                    >听说很难才拿得到offer。</v-expansion-panel-content
                  >
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      isIntersecting: false,

      engineering: [
        {
          program: "Diploma in Civil Engineering",
          code: "DDWA",
        },
        {
          program: "Diploma in Electronics Engineering",
          code: "DDWE",
        },
        {
          program: "Diploma in Electrical Engineering",
          code: "DDWH",
        },
        {
          program: "Diploma in Mechanical Engineering",
          code: "DDWJ",
        },
        {
          program: "Diploma in Chemical Engineering",
          code: "DDWT",
        },
      ],

      management: [
        {
          program: "Diploma in Property Management",
          code: "DDWF",
        },
        {
          program: "Diploma in Technology Management",
          code: "DDWG",
        },
        {
          program: "Diploma in Accounting",
          code: "DDWW",
        },
      ],

      geomatic: [
        {
          program: "Diploma in Land Surveying",
          code: "DDWL",
        },
        {
          program: "Diploma in Urban and Regional Planning",
          code: "DDWN",
        },
        {
          program: "Diploma in Quantity Surveying",
          code: "DDWQ",
        },
        {
          program: "Diploma in Architecture",
          code: "DDWR",
        },
      ],

      computing: [
        {
          program: "Diploma in Computer Science",
          code: "DDWD",
        },
      ],

      panels: [
        {
          campus: "UTM Kuala Lumpur",
          panel: "CIMB Bank Berhad",
        },
        {
          campus: "UTM Skudai",
          panel: "CIMB Bank Berhad",
        },
      ],
    };
  },
};
</script>
