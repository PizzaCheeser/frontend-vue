
<template>
 <div class="container">
    <div class='pizza' style="
        --cheese: #e4451e;
        --crust: #c1963e;
        --roni: #f1f5fc;
        font-size: 15px;
    ">
    <div class='logo'>
      <div class='slice'></div>
      <div class='slice'></div>
      <div class='slice'></div>
      <div class='slice'></div>
      <div class='slice'></div>
      <div class='slice'></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name: "Logo"
}
</script>



<style lang="scss">
.container {
	$number: 6;
	.pizza {
		width: 30em;
		height: 30em;
		align-items: center;
		background: none;
		position: relative;
        left: 25em;
		.slice {
			z-index: -1;
			overflow: visible;
			position: absolute;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 10em 4.2em 1.5em 4.2em;
			border-color: var(--cheese) transparent transparent transparent;
			left: 10.5em;
			top: 3em;
			transform-origin: 50% 100%;
			transform: rotate(0deg);
			&:nth-of-type(2n) {
				&:after {
					box-shadow: 0.5em 3.8em 0 var(--roni);
				}
			}
			&:nth-of-type(3n) {
				&:after {
					box-shadow: 1.5em 1.5em 0 var(--roni), 0em 5em 0 var(--roni);
				}
			}
			@for $i from 1 through $number {
				&:nth-of-type(#{$i}) {
					transform: rotate(-#{($i + 6.5) * 360 / 8}deg);
				}
			}
			&:before {
				content: '';
				position: absolute;
				height: 1.5em;
				width: 8em;
				background: var(--crust);
				top: -12.5em;
				left: -4em;
				border-radius: 100em 100em 0.5em 0.5em / 50em 50em;
			}
			&:after {
				content: '';
				border-radius: 100%;
				position: absolute;
				width: 1.25em;
				height: 1.25em;
				background: var(--roni);
				left: -1em;
				top: -8.8em;
				z-index: 2;
			}
		}
	}
}

</style>