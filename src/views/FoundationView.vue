<template>
	<v-row class="text-center" id="live">
		<v-col>
			<p class="text-h5">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				实时更新
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>
			<p>
				Foundation回忆录实时更新版本
				<a href="https://docs.google.com/document/d/1JIv_cj_trtyMBduYT572OWnSf8xK8tJxdOg2oG0bQmc/edit?usp=sharing"
					target="_blank" class="text-red">点击这里</a>
				追踪
			</p>
		</v-col>
	</v-row>

	<v-row id="date">
		<v-col>
			<p class="text-center text-h5">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				重要日期
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>
			<p class="text-h6">UTM FOUNDATION PROGRAMME</p>
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
						<td>23 Feb 2022 - 1 June 2022</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Status Application</td>
						<td>
							Starting one day after the official SPM result released
						</td>
						<td>Starting from 9 March</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Virtual Open Day</td>
						<td>3 July 2022</td>
						<td>3 July 2022</td>
					</tr>
					<tr>
						<td>4</td>
						<td>New Student Registration Day</td>
						<td>20 July 2022*</td>
						<td>13 – 18 July 2022</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Semester II Lecture Begin</td>
						<td>
							31 July 2022* (Johor Bahru Campus) <br />
							1 August 2022* (Kuala Lumpur Campus)
						</td>
						<td>
							31 July 2022* (Johor Bahru Campus) <br />
							1 August 2022* (Kuala Lumpur Campus)
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
			<p class="text-center text-h5">
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
						No. Pendaftaran是Surat tawaran上面的No
						rujukan，Program呢就是你拿到的科系，Kod Program
						可以查询Panduan Borang P5，Foundation同学的kod是FSPA。
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
						可以放父母也可以放符合条件的亲戚，条件为月薪需要超过RM500（但需注意Saudara
						pertama & kedua需要填写父母以外可以第一时间联络到的人）
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
						12. Borang P5 里面的第26项 Alamat Semasa Pengajian要填吗？
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
						15. 有什么borang是需要印两份出来的吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						建议根据校方给的Set Tawaran Kemasukan来打印和复印。
						<v-img src="../assets/foundation_brg.jpg" max-width="728"></v-img>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						16. 有什么文件是需要sahkan的？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<ol type="a">
							<li>Salinan Surat Tawaran (2 Salinan)</li>
							<li>Salinan Sijil SPM atau setaraf (2 Salinan)</li>
							<li>Salinan Kad Pengenalan (2 Salinan)</li>
							<li>
								Salinan Surat Beranak Pemohon, Ibu bapa, Penjaga (2
								Salinan)
							</li>
							<li>Salinan Sijil Berhenti Sekolah (2 Salinan)</li>
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
						P5的要求是ic size的，<span class="font-weight-bold">只可以使用白底</span>。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						20. Penjamin需要薪水单吗？<span class="font-weight-bold">（注意:
							Penjamin需要至少500或以上个的收入才能当penjamin）</span>
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
							<li>Alamat Pejabat 写工作的地址</li>
							<li>Nama Majikan 写雇主/公司的名字</li>
							<li>Alamat Majikan 写公司注册的地址</li>
						</ol>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						25. Borang
						P5里面需要我填写银行名字以及户口号码，请问一下UTM的Panel
						Bank是什么银行？
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
								<tr>
									<td>UTM Skudai</td>
									<td>CIMB Bank Berhad</td>
								</tr>
								<tr>
									<td>UTM Kuala Lumpur</td>
									<td>Bank Islam malaysia Berhad</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<th>Campus</th>
									<th>Panel Bank Name</th>
								</tr>
							</tfoot>
						</v-table>
						<span class="font-weight-bold">只可以开设学校官方指定户口！！！Degree时期学校只限制Panel
							Bank的交易。</span>
						<br />
						<span class="font-weight-bold text-red">PTPTN的银行户口是强制性的！！！必须在指定银行开户，不可以使用其他银行的户口来申请PTPTN！！！<span
								class="bg-red">（PTPTN的指定银行为Bank Islam）</span></span>
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
						28. 有没有任何的Borang kemasukan的sample？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						有，可以参考这个链接：<a href="https://drive.google.com/drive/folders/18vRsYVu0sjYLAtdbQeIuMl0Qo_Rqg7wh?usp=sharing"
							target="_blank" class="text-red">BORANG KEMASUKAN KE UTM - SAMPLE</a>
						<br />
						<span class="font-weight-bold">近期将会开放</span>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						29. 请问薪水单需要连同表格submit吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						需要。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						30. Borang 3a跟3b的问与答还有小科普！
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<span class="font-weight-bold">Borang 3a and 3b Q&A</span>
						<ol type="1">
							<li>
								<span class="font-weight-bold">请问表格里面的两个penjamin都可以放父母是吗？</span><br />
								可以，只要双方都有做工，并且薪资有RM500以上即可。
							</li>
							<li>
								<span class="font-weight-bold">请问一下两个penjamin都一定要放父母嘛？</span><br />
								不一定，你的亲戚朋友，或者已经就业的哥哥或者姐姐也可以。
							</li>
							<li>
								<span class="font-weight-bold">请问一下Penjamin可以写外人嘛？</span><br />
								是可以，但是不建议。详细情况建议参考下面的Borang 3a3b
								小科普。
							</li>
							<li>
								<span class="font-weight-bold">请问一下Penjamin可以写在新加坡就业的人吗？</span><br />
								不确定，但是最好填写本地就业的，因为方便联系。
							</li>
							<li>
								<span class="font-weight-bold">请问两个penjamin可以同一个人嘛？</span><br />
								不可以，必须都是不同的两个人。
							</li>
							<li>
								<span class="font-weight-bold">为什么需要去到LHDN matikan setem呢？</span><br />
								由于Borang
								3a跟3b牵扯到担保人的部分，所以必须要有政府部门的签署，这样这两份文件才具有法律效益哦。
							</li>
						</ol>
						<span class="font-weight-bold">Borang 3a & 3b小科普</span><br />
						Borang 3a and
						3b是让学生签署担保人。如果学生在上学时期无法定时缴付学费的话，但是父母也没有钱缴付或者联系不到的话。学校将会根据法律效益，找penjamin来缴付该学生的学费。如果一号penjamin找不到，将会找penjamin二号来收取该学生的学费。所以，penjamin建议是自己的亲戚朋友或者是兄弟姐妹，不建议找外人，除非你得到同意。
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
						Course），其他科目考试时候一定是用英文。上课的话是根据
						lecturer，教材会使用英文，但是同时也会用国文作为辅助。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						3. foundation的老师跟degree的一样吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						foundation 和
						degree的师资是有些许不一样的。但是别担心因为utm
						foundation的师资都是有拿到专业文凭并且可以成为合格的教授的，他们也都是utm自己的教授哦。
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
						6. 请问foundation的文凭是utm的还是utmspace自己的？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						文凭一样是utm的，只是课程是由UTMSpace在管理。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						7. 请问我现在读的是第一个学期 （Semester
						I），为什么在学校的官方文件里面是写我们现在在读着第二个学期（Semester
						II）？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						2020年开始的Foundation课程，学校已经把原本的short
						sem也就是sem
						1调整到了最后一个sem，因为当时候收到Covid-19的影响，也把原定在4月开课的课程延迟到7月，学校以比较方便整理课程等等东西，所以就做出了以下的调整：
						<br />
						Short Sem: 10 weeks ; Long Sem: 21 weeks (Include mid &
						final sem break)
						<v-table hover>
							<thead>
								<tr>
									<th>学期</th>
									<th>2020年之前</th>
									<th>2020年之后</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1st Sem</td>
									<td>Sem I (Short Sem)</td>
									<td>Sem II (Long Sem)</td>
								</tr>
								<tr>
									<td>2nd Sem</td>
									<td>Sem II (Long Sem)</td>
									<td>Sem III (Long Sem)</td>
								</tr>
								<tr>
									<td>3rd Sem</td>
									<td>Sem III (Short Sem)</td>
									<td>Sem I (Short Sem)</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<th>学期</th>
									<th>2020年之前</th>
									<th>2020年之后</th>
								</tr>
							</tfoot>
						</v-table>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>

	<v-row id="fee_faq">
		<v-col>
			<p class="text-h5 text-center">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				学费疑问
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>

			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-title>
						1. 听说utm 4.0免学费？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						对噢，不论是通过什么入学管道进入，只要是4.00的话degree第一年第一学期的学费就不需要还。<br>
						<img src="@/assets/foundation_4.0.jpg">
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						2. 我好像看不懂学费表？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						这里是Foundation
						学费解释中文翻译版本。同学可以按进去看的哦！
						<img src="@/assets/foundation_fee.png">
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>

	<v-row id="course_faq">
		<v-col>
			<p class="text-h5 text-center">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				科系问题
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>

			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-title>
						1. Social Science跟Life Science还有Physical
						Science有什么分别 ？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						这3个课程在第一个sem所学的东西都是一样的，在第二个sem开始的时候才会有点分别，Life
						Science呢就是比较倾向于Biology，原本的Physics
						II的课程将会改成Biology I；然而Social
						Science的话就是倾向于商务的课程，会在第二跟第三学期的时候专注于商务课程（可以参考下面的表来了解更加详细的资料）
						<a href="https://drive.google.com/file/d/1Nut5rfA3nusHGolAjWBZBNYDLDVIfx9e/view?usp=sharing" target="_blank"
							class="text-red">【清楚的版本，按这边】</a>
						<img src="@/assets/foundation_timetable.jpg">
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						2. 我在系统申请到Life Science可是我想换去Physical
						Science，我要怎么办？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						你可以联系UTM
						Space的招生处通过email或者拨电，告诉他们你要更换科系即可。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						3. 如何申请foundation 的social science？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						需要在开学之前安排好科系哦，以方便后期不会受到影响。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						4. 我看到了UTM KL跟UTM JB都有Offer Foundation in Physical
						Science，两边campus都有什么差别？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						其实毫无差别，只是UTM
						KL的foundation班可以多读日语，但是日语班是自愿性的哦。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						5. 如果我对UTM KL的Foundation比较有兴趣，我可以换吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						可以的，需要拨电给UTM Space
						Admission来更改你的校区哦，并且你的学号也会有所更改。但是，转换学校只可以在开学前弄，开学后就无法转换校区了。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						6. 我读了life science，以后可以读什么？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						life science 读的内容比较偏向于生物。读完foundation in life
						science 后呢同学可继续申请相关的科系。例如，life
						science是理科+生物的组合，那么日后同学可申请更多关于生物方面的科系，或是部分的工程科系例如bio-medical
						engineering也可以哦。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						7. UTM Foundation 会难读吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						这个问题因人而异，因为Physics跟Chemistry大部分都跟SPM相似滴。然后Calculus也是跟Add
						Maths差不多，只是比较深入一点。比较有挑战的是Computing，也就是编程或者Programming。除此之外，我们也会学关于英文，普通数学，电脑课程还有企业学哦。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						8.
						如果我Foundation读到一半了，我拿到Matriculation/PISMP/UPU的offer，我可以退学吗？学费会不会退回？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						你当然可以申请退学，学费的话需要看你读了多久方可决定是否会退回，退回的百分比如下：
						<br />
						<p class="font-weight-bold text-center">
							期限与会被征收的学费百分比
						</p>
						<v-table hover>
							<thead>
								<tr>
									<th>期限</th>
									<th>注册费</th>
									<th>学费</th>
									<th>宿舍费</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>第一个星期到第四个星期之间</td>
									<td>100 %</td>
									<td>50 %</td>
									<td>100 %</td>
								</tr>
								<tr>
									<td>第五个星期之后</td>
									<td>100 %</td>
									<td>100 %</td>
									<td>100 %</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<th>期限</th>
									<th>注册费</th>
									<th>学费</th>
									<th>宿舍费</th>
								</tr>
							</tfoot>
						</v-table>
						<ul>
							<li>欠缺的学费必须从退学申请批准信发出的30天内缴清。</li>
							<li>
								若有多余的学费将会在30天内退还当调整工作已经完成。
							</li>
							<li>
								以上皆为翻译版，一切以原文版为准。 （原文：
								<a class="text-red"
									href="https://studentppi.utmspace.edu.my/wp-content/uploads/2020/09/Buku-Panduan-Kewangan-bagi-Pelajar-Tempatan-Program-Asasi-UTM_2020.pdf"
									target="_blank">Buku Panduan Kewangan Program Asasi UTM</a>）
							</li>
						</ul>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						9. UTM foundation很像私人的，是有受MQA认证的吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						有的，UTM的foundation是UTM
						Space自己开办的课程并且是有受到MQA的认证的，这点同学不必担心。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						10. UTM Foundation的上课时间是怎样子的？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						JB Campus的上课时间是从星期日到星期四；KL
						Campus的话就是星期一到星期五。每天早上8点到下午5点都会有课，然而休息时间为下午1点到2点。
						<v-table hover>
							<thead>
								<tr>
									<th>Credit Hour</th>
									<th>Short Sem (9 weeks)</th>
									<th>Long Sem (18 weeks)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>2</td>
									<td>6 Hours/Week*</td>
									<td>3 Hours/week*</td>
								</tr>
								<tr>
									<td>4</td>
									<td>10 Hours/Week</td>
									<td>5 Hours/week</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<th>Credit Hour</th>
									<th>Short Sem (9 weeks)</th>
									<th>Long Sem (18 weeks)</th>
								</tr>
							</tfoot>
						</v-table>
						<span class="font-weight-bold">*不包括practical课，Practical课一律3 Hours per Week per
							Subject。</span>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						11. 请问Social Science可以申请什么科系？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						可以
						<a href="https://docs.google.com/spreadsheets/d/1CBsJfPlzrpWDCm4NE6IwG4RPQJR_M27b/edit#gid=947870231"
							target="_blank" class="text-red">点击这里</a>
						参考哦，里面有三大foundation科系可以在degree时期通过mainstream管道所申请到的科系。
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>

	<v-row id="dresscode_faq">
		<v-col>
			<p class="text-h5 text-center">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				衣着问题
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>

			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-title>
						1. 请问UTM的dress code是怎样的呢？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						UTM的dress
						code主打宽松并且不暴露的服装哦，裤子或者裙子都必须要长过膝盖。<br />
						可以参考以下图片：<br />
						<img src="@/assets/dress1.png">
						<img src="@/assets/dress2.jpg">
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						2. 请问可不可以穿牛仔裤？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						牛仔裤属于Informal服装，所以去上课、出席活动、办公室时不可以穿的哦。fyi，破洞裤也是不可以的。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						3. 请问有限定什么颜色跟花纹吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						颜色没有限定，但是建议淡色系，并且花纹正常，比如线条等等。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						4. 请问女生Smart Day的时候，一定要穿长裙吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						根据学校的law规定是需要穿长裙的哦。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						5. 请问马来服装是可以接受的吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						接受的，男生或者女生都是获准穿baju
						kurung去上课的或者一些官方活动。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						6.
						请问在工大范围时时刻刻都需要穿长袖的吗？如果不是的话，请问什么时候才需要穿长袖衬衫？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						不需要哦，长袖衬衫大致上都是在星期一的Smart
						Day、学校官方活动、presentation的那天才需要穿的哦。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						7. 请问那种裤脚有松紧带的可以接受吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						不接受的哦，所以建议你的裤子不要紧身的哦。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						8. 请问有领的服装需要几时穿？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						上课的时候，以及去office处理事务的时候。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						9. 请问在宿舍区域的话，也需要时时刻刻地穿着长裤吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						不需要的哦，如果你处于宿舍区的话只需要跟着你在家平常的穿着即可。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						10. 请问Smart Day的时候必须穿黑皮鞋吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						是的，黑皮鞋属于formal attire的一部分。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						11. 请问领带有什么限制吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						没有。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						12. 请问西装外套是需要的吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						不需要，如果自己要准备的话也是可以的。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						13. 如果平常天的话，不是smart
						day的情况下可以穿运动鞋/球鞋/跑步鞋/出街鞋去上课吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						可以的哦，只要是包鞋（covered shoes)就可以了。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						14. 请问是不是强制每个人都必须要有一套马来装？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						没有强制，学生们可以自愿性地购买。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						15. 请问女生在smart day的时候是需要打领带的吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						不需要。
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>

	<v-row id="scolarship_faq">
		<v-col>
			<p class="text-h5 text-center">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				奖贷学金
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>

			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-title>
						1. Utmspace foundation有什么奖学金可以申请吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						由于UTM的Foundation课程是UTMSpace开办的所以政府不会给津贴，但是可以到
						<a href="https://www.biasiswamalaysia.com/" target="_blank" class="text-red">Biasiswa Malaysia</a>
						了解或者上网寻找其他奖贷学金。同时要记得先查看条款和条件是否符合。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						2. Foundation可以申请ptptn吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						UTM的Foundation课程由于课程时间少于1年，而PTPTN的要求是所剩的课程时限不少于1年，所以即使UTM
						foundation 受MQA 认证也不可以申请PTPTN 的。 <br />
						更多详细的借贷金额也可以到PTPTN的网站参考： <br />
						<a href="https://www.ptptn.gov.my/permohonan-pinjaman-side" class="text-red"
							target="_blank">https://www.ptptn.gov.my/permohonan-pinjaman-side</a>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						3. SSPN-i是什么来的？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						SSPN-i是国民教育储蓄基金，简单来说就是一个储蓄户口。申请ptptn的同学都需要先开一个sspn-i的户口，因为这个户口号码是申请PTPTN的条件之一。
						<br />
						开户链接：<a href="https://www.ptptn.gov.my/esmas-open-acc-web/#/openAccount" class="text-red"
							target="_blank">https://www.ptptn.gov.my/esmas-open-acc-web/#/openAccount</a>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>

	<v-row id="hostel_faq">
		<v-col>
			<p class="text-h5 text-center">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				宿舍问题
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>

			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-title>
						1. Utm有巴士从宿舍去学校吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						UTMJB和UTMKL
						都有提供巴士让学生从自己的宿舍去到上课的地方，但是因为UTMKL的campus不是很大所以校内就没有提供巴士服务，只需步行即可。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						2. 每间宿舍都是一样的格局吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						UTM的宿舍是双人房 (有床，橱，书桌，椅子，桌灯，风扇有)。
						不过UTM JB宿舍的厕所是大家共用的，而UTM
						KL的是两间房间共用一个厕所，所以厕所需要自行清洗。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						3. 宿舍有wifi吗？要还钱的吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						UTM 有提供公用wifi，是免费的。但是需要在同学入学之后使用UTM
						id 和password
						才能使用。但是每天凌晨4点都会重置，需要每天重新login！有些网站也会受到限制，不可以浏览。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						4. 宿舍里面可以煮东西吗？煮水的话嘞？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						UTM
						的宿舍是不允许煮食物的；同学可以在宿舍煮水，需自行准备煮水的电器并在报到时缴付电器的费用。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						5. Foundation 的一年里可以不住宿舍吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						可以的，可以选择住在宿舍或者在Campus外居住；如果在campus外居住，须在每个sem返回学校填写表格。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						6. 在Johor 的Foundation
						的宿舍，是有一个人居住的吗？是多少钱？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						校方提供给学生的宿舍都是默认为双人房的，如果要选择单人房的话需要向校方申请并且提供合理的原因，再看校方是否通过哦。Foundation学生双人房的宿舍费总共是RM3000。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						7. 房间有hair dryer吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						没有哦，需要自备。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						8.
						第一天去宿舍时候要自备垃圾桶，扫把，畚斗那些的打扫用具吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						可以自备，也可以选择当天在学校才去附近购买。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						9. 可以带小冰箱吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						不建议这么做哦，因为被抓到的话是会被罚款甚至有可能被充公的。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						10.
						房间里面有问题比如灯坏掉还是插座不能用的话，是要自己修吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						可以通知宿舍的管理员，他们会尽量在几天内来帮你处理好。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						11. 我在房间里面的话可以穿短裤吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						可以，只要不是在宿舍外面的范围走动。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						12. 可以选择自己要住的宿舍吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						这点没办法哦，因为都是校方的安排。但是学校会尽量安排学生住在靠近上课地点的宿舍。而Foundation的同学呢，男女都是住在Kolej
						Perdana。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						13. 我可以申请跟朋友一起住吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						根据学校的规定，是无法选择自己的宿舍和室友的。但是通常校方都会大发慈悲，让你跟你的朋友一起住，只要一起报到即可。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						14. UTM KL的男女宿舍长怎样的？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						男女宿舍格局都一样，卫生间都在房内的（非常感谢
						<a href="https://www.facebook.com/pmbutmkl" target="_blank" class="text-red">马来西亚工艺大学吉隆坡分校佛学会（华文学会）</a>
						提供照片）：
						<img src="@/assets/ksj_room.jpg">
						<img src="@/assets/ksj_toilet.jpg">
						<img src="@/assets/ksj_pantry.jpg">
						<img src="@/assets/ksj_washing.jpg">
						<img src="@/assets/ksj_laundry.jpg">
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						15. UTM Skudai的男女宿舍长怎样的？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<p class="text-decoration-underline text-center title">
							Kolej Perdana
						</p>
						<v-row>
							<v-col>
								<video class="hidden-sm-and-down" controls>
									<source src="@/assets/kp_male1.mp4" type="video/mp4" />
								</video>
								<video width="320" class="hidden-md-and-up" controls>
									<source src="@/assets/kp_male1.mp4" type="video/mp4" />
								</video>
							</v-col>
							<v-col>
								<video class="hidden-sm-and-down" controls>
									<source src="@/assets/kp_male2.mp4" type="video/mp4" />
								</video>
								<video width="320" class="hidden-md-and-up" controls>
									<source src="@/assets/kp_male2.mp4" type="video/mp4" />
								</video>
							</v-col>
							<v-col>
								<video class="hidden-sm-and-down" controls>
									<source src="@/assets/kp_male3.mp4" type="video/mp4" />
								</video>
								<video width="320" class="hidden-md-and-up" controls>
									<source src="@/assets/kp_male3.mp4" type="video/mp4" />
								</video>
							</v-col>
							<v-col cols="12">
								<img src="@/assets/kp_male4.jpg">
							</v-col>
							<v-col cols="12">
								<img src="@/assets/kp_male5.jpg">
							</v-col>
							<v-col cols="12">
								<img src="@/assets/kp_male6.jpg">
							</v-col>
							<v-col cols="12">
								<img src="@/assets/kp_male7.jpg">
							</v-col>
						</v-row>

						<p class="text-decoration-underline text-center title mt-8">
							<v-icon color="blue">mdi-gender-male</v-icon>
							男宿舍 - Kolej 10
						</p>
						<v-row>
							<v-col cols="12">
								<img src="@/assets/k10a.jpg" class="mx-auto">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k10b.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k10c.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k10d.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k10e.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k10f.jpg">
							</v-col>
						</v-row>

						<p class="text-decoration-underline text-center title mt-8">
							<v-icon color="pink">mdi-gender-female</v-icon>
							女宿舍 - Kolej 9
						</p>
						<v-row>
							<v-col md="6">
								<img src="@/assets/k9a.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k9b.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k9d.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k9e.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k9f.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k9g.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k9c.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k9h.jpg">
							</v-col>
							<v-col md="6">
								<img src="@/assets/k9i.jpg" class="mx-auto">
							</v-col>
						</v-row>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						16. K9
						K10在哪里哦？他附近靠近什么设施？交通方便吗？（K9女宿舍，K10男宿舍）
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<v-row>
							<v-col>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5363.02440109997!2d103.64687812969346!3d1.55936916772616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da715a37183d8d%3A0x463ebbe956cfae7a!2sKolej%209!5e1!3m2!1sen!2smy!4v1654337652040!5m2!1sen!2smy"
									width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
									referrerpolicy="no-referrer-when-downgrade" class="hidden-sm-and-down"></iframe>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5363.02440109997!2d103.64687812969346!3d1.55936916772616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da715a37183d8d%3A0x463ebbe956cfae7a!2sKolej%209!5e1!3m2!1sen!2smy!4v1654337652040!5m2!1sen!2smy"
									style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
									class="hidden-md-and-up"></iframe>
							</v-col>
							<v-col>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9835.827248892432!2d103.6438532137106!3d1.5599397871402423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da715aed42d841%3A0xbb59b7e68940329c!2sKolej%2010%2C%20UTM%20Skudai!5e1!3m2!1sen!2smy!4v1654337707575!5m2!1sen!2smy"
									width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
									referrerpolicy="no-referrer-when-downgrade" class="hidden-sm-and-down"></iframe>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9835.827248892432!2d103.6438532137106!3d1.5599397871402423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da715aed42d841%3A0xbb59b7e68940329c!2sKolej%2010%2C%20UTM%20Skudai!5e1!3m2!1sen!2smy!4v1654337707575!5m2!1sen!2smy"
									style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
									class="hidden-md-and-up"></iframe>
							</v-col>
						</v-row>
						<v-row>
							K9
							K10区域非常靠近食堂以及篮球场、羽毛球场、足球场，而且宿舍外面就有巴士站载学生到新的图书馆以及上课的地方。此外，也会载学生到inbound范围，也就是KRP,
							KTDI区域。
						</v-row>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						17. KSJ在哪里？离campus远吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4912.128724072967!2d101.7296222!3d3.1868624999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc378ad556bffb%3A0x9311d7bda7d09682!2sKolej%20Kediaman%20Siswa%20Jaya!5e1!3m2!1sen!2smy!4v1656923869779!5m2!1sen!2smy"
							width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
							referrerpolicy="no-referrer-when-downgrade" class="hidden-sm-and-down"></iframe>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4912.128724072967!2d101.7296222!3d3.1868624999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc378ad556bffb%3A0x9311d7bda7d09682!2sKolej%20Kediaman%20Siswa%20Jaya!5e1!3m2!1sen!2smy!4v1656923869779!5m2!1sen!2smy"
							style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
							class="hidden-md-and-up"></iframe>
						<br class="mt-3" />
						离campus不远，不jam的话5分钟左右就能到达。
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>

	<v-row id="environment_faq">
		<v-col>
			<p class="text-h5 text-center">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite"
					icon="mdi-hand-pointing-right"></v-icon>
				校内&校外环境与生活问题
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite"
					icon="mdi-hand-pointing-left"></v-icon>
			</p>

			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-title>
						1. Utm里面有什么特别的设施？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						校内有泳池，体育场、篮球场等等还有各式各样的地方等待你自己去探索~
						<br />
						UTM Skudai 校园介绍短片：
						<v-row>
							<v-col>
								<iframe class="hidden-sm-and-down" width="560" height="315"
									src="https://www.youtube-nocookie.com/embed/JT7LedfgX1Q" title="YouTube video player" frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen></iframe>
								<iframe class="hidden-md-and-up" src="https://www.youtube-nocookie.com/embed/JT7LedfgX1Q"
									title="YouTube video player" frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen></iframe>
							</v-col>
						</v-row>

						<v-row>
							<v-col>
								UTM KL宿舍Kolej Siswa Jaya(KSJ)简介： <br />
								<a class="text-red" href="https://www.facebook.com/pmbutmkl/posts/480081150410035" target="_blank">Part
									1</a>，<a class="text-red" href="https://www.facebook.com/pmbutmkl/posts/480698553681628"
									target="_blank">Part 2</a>，<a class="text-red"
									href="https://www.facebook.com/pmbutmkl/posts/481342093617274" target="_blank">Part 3</a>
							</v-col>
						</v-row>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						2. 学校附近有market吗？</v-expansion-panel-title>
					<v-expansion-panel-text>UTM KL校内有
						<a href="https://goo.gl/maps/8NLWtfKBQbuPji388" class="text-red" target="_blank">Gurney
							mall</a>，mall里面同时也有公寓（最便宜的配套是RM1100，2张单人床，冷气，清理服务，wifi，泳池；详细的可以到
						<a href="https://www.instagram.com/residensiutmkl.official/" class="text-red" target="_blank">Residensi UTM
							KL</a>
						查看）。UTMJB 附近有
						market让同学购买日常用品。此外，校内也有杂货店方便学生购买必需品。
						<br class="mb-3" />
						Gurney Mall简介短片：<br />
						<iframe class="hidden-sm-and-down" width="560" height="315"
							src="https://www.youtube-nocookie.com/embed/Ck9nc0fAY58" title="YouTube video player" frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen></iframe>
						<iframe class="hidden-md-and-up" src="https://www.youtube-nocookie.com/embed/Ck9nc0fAY58"
							title="YouTube video player" frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen></iframe>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						3. 通常生活费是多少？</v-expansion-panel-title>
					<v-expansion-panel-text>
						生活费是偏向于个人的，校内的食物选择琳琅满目，价钱平均为RM5一餐。另外还需要考虑买书本、文具、复印教材的费用、和其他生活娱乐之类的。一个月的生活费建议准备至少RM500。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						4.
						那么你们是去哪里洗衣服的？洗了晒在哪里？</v-expansion-panel-title>
					<v-expansion-panel-text>
						除了可以选择手洗，大部分宿舍内也有提供洗衣机。校内也有提供自助自已的dobi，dobi内也有烘干机。宿舍外面通常都会有一个晒衣服的地方，如果不放心的话也可以选择晒在自己房间，但是需要自备架子或绳子。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>5. 校内有华人餐吗？校外的话会难找吗？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						校内有华人素食。同时也可以选择乘坐Grab或巴士到校外附近的Taman
						U。或者是用Food
						Panda选择叫Delivery，和校外的华人餐厅外卖。</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						6. 宿舍里面有饮水机吗？</v-expansion-panel-title>
					<v-expansion-panel-text>
						UTMJB的话，在步行可到的范围内，宿舍和上课的地方附近都会有饮水机，但是需注意有些饮水机需要收零钱而有些则是免费的。而UTMKL的宿舍内，每隔一楼层都会有一台小饮水机（免费的），大饮水机则在篮球场旁边（需要付零钱的）。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						7.
						宿舍的房间有电风扇是吗？然后tilam不用带对吗？</v-expansion-panel-title>
					<v-expansion-panel-text>宿舍提供的风扇是安装在天花板的吊扇哦。而tilam则是不需要带的因为宿舍是有提供床褥的，如果同学觉得有需要的话也是可以带的。
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						8. UTM JB的公交设施如何？</v-expansion-panel-title>
					<v-expansion-panel-text>B 呢有Bus Muafakat
						Johor正在运行，负责载送居民到达目的地。车费呢是一人一年RM10，必须申请专属的BMJ
						Kad，在2021年，BMJ为了推动到柔佛旅游计划，手持大马卡的马来西亚公民可以以身份证上车，无需任何费用。BMJ也有一辆巴士进入UTM
						JB区域载送学生出校等等（目前MCO期间，无法确定是否照常入内）
						<br /><br />
						除了BMJ之外，JB也有Causewaylink以及众多巴士公司在市区里面载送，车费不详，需要根据你的目的地付费，并且只可以使用现金付费。
						<br />
						<a href="https://drive.google.com/drive/folders/1P6zVO0e_CXz0S9OBWoQ8smv0eKRv7KDr?usp=sharing" target="_blank"
							class="text-red">点击我查看路线</a>
						<br /><br />
						<p class="text-red font-weight-bold">
							*如果要查看任何关于P211的时间以及路线的话，请下载LUGO或者使用Google
							Map
						</p>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						9. 如果我家住靠近学校或者我是住外面的话，需要怎样搭公共交通到学校呢？</v-expansion-panel-title>
					<v-expansion-panel-text>
						UTM KL路线： <br /><br />
						路线一 <br />
						搭LRT去到
						<span class="bg-red">Dato Keramat</span>
						然后在那里等个
						<span class="bg-red">220号</span>
						的巴士并搭上，220号巴士有一站会<span class="bg-red">停在UTM KL大门对面的巴士站</span>。 <br /><br />
						路线二 <br />
						若不太想等巴士，也可以搭 LRT 去到
						<span class="bg-red">Damai</span>
						然后走个大约15分钟就能到达UTM KL的Gurney Mall（校内的Mall）
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>
</template>