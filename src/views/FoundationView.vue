<script setup>
import setem1 from "@/assets/setem1.png"
import setem2 from "@/assets/setem2.png"
</script>

<template>
	<v-row class="text-center" id="live">
		<v-col>
			<p class="text-h5">
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite">
					mdi-hand-pointing-right</v-icon>
				实时更新
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite">
					mdi-hand-pointing-left</v-icon>
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
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite">
					mdi-hand-pointing-right</v-icon>重要日期
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite">
					mdi-hand-pointing-left</v-icon>
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
				<v-icon color="red" class="animate__animated animate__fadeInLeft animate__infinite">
					mdi-hand-pointing-right</v-icon>填写表格疑问
				<v-icon color="red" class="animate__animated animate__fadeInRight animate__infinite">
					mdi-hand-pointing-left</v-icon>
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
									<v-img :src="setem1" max-width="132" class="ml-2 ml-md-7"></v-img>
								</v-row>
								<v-row> Pos Malaysia的Setem Hasil </v-row>
							</v-col>

							<v-col md="2">
								<v-row>
									<v-img :src="setem2" max-width="112" class="ml-3"></v-img>
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
						<v-simple-table>
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
						</v-simple-table>
						<span class="font-weight-bold">只可以开设学校官方指定户口！！！Degree时期学校只限制Panel
							Bank的交易。</span>
						<br />
						<span class="font-weight-bold red--text">PTPTN的银行户口是强制性的！！！必须在指定银行开户，不可以使用其他银行的户口来申请PTPTN！！！<span
								class="red white--text">（PTPTN的指定银行为Bank Islam）</span></span>
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
								class="red white--text">（如果你还没有过生日，一样可以开户！只是银行账户会限定交易额度，这个额度可以在生日后到银行更新。）</span></span>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						27. 我还没开户，需要带什么到银行开户？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
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
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						28. 有没有任何的Borang kemasukan的sample？
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						有，可以参考这个链接：<a href="https://drive.google.com/drive/folders/18vRsYVu0sjYLAtdbQeIuMl0Qo_Rqg7wh?usp=sharing"
							target="_blank" class="red--text">BORANG KEMASUKAN KE UTM - SAMPLE</a>
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
						<span class="font-weight-bold">Borang 3a3b小科普</span><br />
						Borang 3a and
						3b是让学生签署担保人。如果学生在上学时期无法定时缴付学费的话，但是父母也没有钱缴付或者联系不到的话。学校将会根据法律效益，找penjamin来缴付该学生的学费。如果一号penjamin找不到，将会找penjamin二号来收取该学生的学费。所以，penjamin建议是自己的亲戚朋友或者是兄弟姐妹，不建议找外人，除非你得到同意。
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>
</template>