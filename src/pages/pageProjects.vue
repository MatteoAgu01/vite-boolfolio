<template>
	<div class="p-4">
		<table>
			<thead>
				<td>
					<h4 class="text-uppercase">title</h4>
				</td>
				<td class="w-75">
					<h4 class="text-uppercase">description</h4>
				</td>
				<td>
					<h4 class="text-uppercase text-center">id</h4>
				</td>
			</thead>
			<tbody>
				<tr v-for="project in projects" :key="index">
					<td class="py-3">
						<p class="m-0">{{ project.title }}</p>
					</td>
					<td class="px-2 py-3">
						<p class="m-0">{{ project.description }}</p>
					</td>
					<td class="px-4 text-center py-3">
						<p class="m-0">{{ project.id }}</p>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'projects',
	data() {
		return {
			title: 'ciao',
			projects: [],
			apiUrl: 'http://127.0.0.1:8000/api'
		}
	},
	methods: {
		getProject() {
			axios.get(`${this.apiUrl}/project?page=2`).then((res) => {
				this.projects = res.data.results.data,
					console.log(this.projects);
			})
		}
	},
	mounted() {
		this.getProject();
	}
}
</script>

<style lang="scss" scoped></style>