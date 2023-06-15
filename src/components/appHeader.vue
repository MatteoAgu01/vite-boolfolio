<template>
	<header>
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Navbar</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav" v-for="(link, index) in menu" :key="index" >
						<li class="nav-item mx-3" >
								<router-link  :to="{name: link.routeName}">
									{{ link.label }}
								</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'appHeader',
	data() {
		return {
			 menu: [
				{
					label: 'Home',
					routeName: 'home'
				},
				{
					label: 'Projects',
					routeName: 'projects'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped></style>