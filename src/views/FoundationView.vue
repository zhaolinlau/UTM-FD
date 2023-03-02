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
</template>