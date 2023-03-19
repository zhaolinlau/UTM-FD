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
			<p class="headline text-center">
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
</template>