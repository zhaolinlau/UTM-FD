<script setup>
const e1 = 1;
let isIntersecting = false;

const engineering = [
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
];

const management = [
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
];

const geomatic = [
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
];

const computing = [
	{
		program: "Diploma in Computer Science",
		code: "DDWD",
	},
];

const panels = [
	{
		campus: "UTM Kuala Lumpur",
		panel: "CIMB Bank Berhad",
	},
	{
		campus: "UTM Skudai",
		panel: "CIMB Bank Berhad",
	},
];
</script>

<template>
	<v-row id="live">
		<v-col>
			<p class="text-h5 text-center">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				实时更新
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>
			<span class="text-center">
				<p>
					Diploma回忆录实时更新版本
					<a href="https://docs.google.com/document/d/1adcmMMb_TGeoGya83xHyUAMP3Ccwq3XYlr83uI0Hq4c/edit?usp=sharing"
						target="_blank" class="text-red">点击这里</a>
					追踪
				</p>
			</span>
		</v-col>
	</v-row>

	<v-row id="date">
		<v-col>
			<p class="text-h5 text-center">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				重要日期
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>
			<p class="text-h6">UTM DIPLOMA PROGRAMME</p>
			<p class="text-subtitle-1">INTAKE: JULY 2022</p>
			<v-table hover>
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
				<tfoot>
					<tr>
						<th>No</th>
						<th>Item</th>
						<th>Local Date</th>
						<th>International Date</th>
					</tr>
				</tfoot>
			</v-table>
		</v-col>
	</v-row>

	<v-row id="form_faq">
		<v-col>
			<p class="text-h5 text-center">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				填写表格疑问
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>

			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-title>
						1. No. Pendaftaran / Program 要填什么？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						No. Pendaftaran是Surat
						tawaran上面的Matrik，Program呢就是你拿到的科系（例如：Diploma
						in Civil Engineering），Kod Program 也可以查询Surat
						tawaran上的Program。 <br />

						<v-table hover>
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
							<tfoot>
								<tr>
									<th>Diploma Program</th>
									<th class="text-center">Program Code</th>
								</tr>
							</tfoot>
						</v-table>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						2. Tinggi / Kumpulan darah 如果我不知道的话可以空着吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						血型不懂可以先空着。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						3. Agregat / Pangkat 要填什么？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						Agregat和Pangkat不需要填哦。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						4. Penjamin可以放父母/亲戚（跟Saudara pertama &
						kedua一样）吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						Penjamin
						可以放父母也可以放符合条件的亲戚，条件为每月收入至少RM500或以上（但需注意Saudara
						pertama & kedua需要填写父母以外可以第一时间联络到的人）。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						5. 如果RM10的setem hasil完了，我可以用两张RM5的setem
						hasil代替吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						可以，但是要注意黏上去时候2张setem hasil没有重叠到。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						6. 哪里可以matikan setem？UTC可以吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						UTC已经不能matikan setem
						了，必须去LHDN。此外，Pahang的Pejabat Tanah也可以matikan
						setem。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						7. 如果我本人没有去而是请朋友帮我matikan setem可以吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						不可以哦，因为matikan
						setem时候需要填写个人资料，建议是亲自去。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						8. Setem hasil要去哪里买？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
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
									<img src="@/assets/setem1.png" class="ml-2 ml-md-7">
								</v-row>
								<v-row> Pos Malaysia的Setem Hasil </v-row>
							</v-col>

							<v-col md="2">
								<v-row>
									<img src="@/assets/setem2.png" class="ml-3">
								</v-row>
								<v-row> LHDN的Setem Hasil </v-row>
							</v-col>
						</v-row>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						9. 我需要准备多少张RM10的setem hasil呢？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						总共是4张（若没有申请PTPTN，只需2张） <br />
						a. 2张贴在Borang 3a & 3b，需要自己到LHDN去matikan setem
						<br />
						b. 2张准备给PTPTN，不需要matikan setem否则就作废了
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						10. 我的父母退休了/没有工作，请问需要填写Borang Pengesahan
						Pendapatan吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						需要填写Borang Pengesahan
						Pendapatan，薪水则填写RM0。若是退休的公务员，每个月都会有一份报告单，可以用来作为证明。而如果是家里母亲为家庭主妇的话，则不需要填这个borang。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						11. 请问我可以找谁sahkan我的borang和文件？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
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
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						12. Borang UTM P5 里面的 Bahagian A1 第26项 Alamat Semasa
						Pengajian要填吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						不需要哦，除非大学期间不住在校内宿舍。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						13.
						我印出来了才发现我有填错东西，我需要重新印过还是可以用correction
						tape修改吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						如果发现表格有需要修改的地方，建议使用红笔做出更改就好。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						14. 请问我需要用70gsm还是80gsm的纸复印我的文件呢？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						没有特别要求需要用哪一种纸哦，但是建议使用80gsm的纸打印重要文件，以防呈交时文件受损。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						15. 有什么borang是需要印3份出来的吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						建议根据校方给的Set Tawaran Kemasukan来打印和复印。
						<img src="@/assets/diploma_brg.png">
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						16. 有什么文件是需要sahkan的？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
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
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						17. Borang 要用portrait还是landscape来打印？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						使用portrait来打印哦。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						18. 请问薪水单是有指定要最新的吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						是没有注明需要最新的薪水单，但是建议使用最新的哦。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						19. 照片需要多少张呢?什么size的？背景要蓝底还是白底？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						一份Borang
						P5需要一张。为了避免日后申请其他事项需要用到，可以准备多几张预备着。根据Borang
						P5的要求是passport size的，只可以使用白底。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						20. Penjamin需要薪水单吗？（注意:
						Penjamin需要至少500或以上个的收入才能当penjamin）
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						Penjamin不需要薪水单哦，他们是作为你在utm读书期间的担保人，需要担保你在读书期间有办法偿还学费以及其他费用。校方若在处理费用方面出了问题将会联系这两位担保人。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						21. 请问下Borang 3a & 3b
						如果penjamin的房子贷款还没付完，就不算自己的所以不需要写进去是吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						其实是可以写进去的，因为很多人的房子都是在贷款。虽然说是在贷款，但是名义上房子已经属于自己的了，只是和银行借钱。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						22. 如果工作没有kwsp的话，gaji bersih和jumlah
						pendapatan可以写一样的吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						可以。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						23. 那个照片我可以自己拍吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						建议到外面的照相馆拍，记得要穿formal或者有领的整齐衣服。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						24. Nama majikan 是写公司名字还是老板的名字？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<ol type="a">
							<li>Alamat Pejabat 公司地址</li>
							<li>Nama Majikan 雇主名字</li>
							<li>Alamat Majikan 雇主地址</li>
						</ol>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						25. Borang P5里面需要我填写银行名字以及户口号码，请问一下UTM
						Diploma的Panel Bank是什么银行？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<v-table hover>
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
							<tfoot>
								<tr>
									<th>Campus</th>
									<th>Panel Bank Name</th>
								</tr>
							</tfoot>
						</v-table>
						<span class="font-weight-bold">只可以开设学校官方指定户口，学校只限制Panel
							Bank的交易！</span>
						<br />
						<span class="font-weight-bold text-red">PTPTN的银行户口是强制性的，必须在学校指定的银行开户，不可以使用其他银行的户口来申请PTPTN！！！(PTPTN的指定银行为CIMB
							Bank Berhad)</span>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						26.
						我现在没有任何个人名字银行户口，可是我有与父母的联名户口，请问可以用吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						如果是联名户口，建议把他分出来成个人户口或者开设一个新的个人户口，因为当UTM需要退款的时候，必须核实到时学生的名字方可继续处理，<span
							class="font-weight-bold">若没有将会有所耽搁或者照成退款失败。<span
								class="bg-red">（如果你还没有过生日，一样可以开户！只是银行账户会限定交易额度，这个额度可以在生日后到银行更新。）</span></span>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						27. 我还没开户，需要带什么到银行开户？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						需要开户的东西如下：（有分18岁以上或者18岁以下，年龄以生日日期为准）
						<v-table hover>
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
							<tfoot>
								<tr>
									<th>18岁以上</th>
									<th>18岁以下</th>
								</tr>
							</tfoot>
						</v-table>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						28. 有没有任何的Borang Set Tawaran Kemasukan的sample？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						有，可以参考由校方提供的指南：<a href="https://drive.google.com/file/d/1CO_oLIP7JPehOollgUmHsSLRO2qRV4MG/view?usp=sharing"
							target="_blank" class="text-red">PANDUAN MENGISI BORANG SET TAWARAN KEMASUKAN</a>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>

	<v-row id="class_faq">
		<v-col>
			<p class="text-h5 text-center">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				日常上课疑问
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>

			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-title>
						1. idp生是和mainstream生一起上课的还是分开？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						两者是一起上课的哦。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						2. 上课和考试时候是用什么语言啊？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						除了部分大专必修科（University General
						Course），其他科目考试时候一定是用英文或者双语。上课的话是根据
						lecturer，教材会使用英文，但是同时也会用国文作为辅助。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						3. 上课的衣服有什么要求吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						最基本是有领的短袖上衣，长裤和包鞋。另外，校方有规定过星期一是formal
						wear。 <br />
						<img src="@/assets/tatacara_berpakaian.jpg">
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						4.
						上课有需要准备些什么standard的簿子或是textpad吗？还是多数用电脑？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						可以自备簿子或者白纸方便记录资料，教学的讲义和内容都需要根据lecturer，有的会给softcopy让我们自行打印（例如PowerPoint）有的则是要求需要用指定的书本。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						5. Johor的周末是在星期五和六吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						是的，所以星期五和六是没有上课的，除非教授要求。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						6. 请问diploma的文凭是utm的还是utmspace自己的？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						文凭一样是utm的，只是课程是由UTMSpace在管理，而UTMSpace是
						UTM 的其中一个faculty。
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>
</template>