- v-once, v-html
- use $event to pass default event from dom
    > v-on:click="increase(2, $event)"
- you can use event.stopPropagation to force handling for the event on the current dom element or you can simply use vue.js event modifiers
    > v-on:mousehover.stop
- It's possible to chain event modifiers
    > v-on:mousehover.stop.prevent
- Key modifers can be chained too
    > v-on:keyup.enter.esc
- use v-model directive for two-way binding
- vue.js limits binding experssions for events and prop binding to only one javascript expression. For more expressions you could use computed methods. See definition of computed methods in vue.js docs
- a computed method gets executed only when data properties inside them changes. Vue.js anaylsis the code insiede computed method and is aware of changes to data properties that the computed method is dependent on
- you can use attribute binding for dynamic css class, vue.js will merge the bound class attribute with the raw one
    > :class="{loading: isLoading}", object binding where the key is the css class and the value is the condition
    > :class="color", binding to a data property, which means specifying a css class name
    > :class="[color, {red: isRed}]", an array, a mixture of both above
    > :style="{backgroundColor: color}", object binding where the key is the name of the css property and the value is it's value
    > :style="[styles, {width: width+'px'}"
- v-if, v-else, v-else-if
- v-else will follow the latest v-if, same for v-else-if
- v-if removes the dom element completely
- you can use v-if directive with html5 template to avoid wrapping your code withing an extra div
- v-show contrary to v-if, it's doesn't remove the element completly from the DOM, it simply hides it using css "displya:none"
- v-for
    > <li v-for="item in items">{{item}}</li>
    > <li v-for="(item, index) in items">{{item}} + {{index}}</li>
- you can use v-for with template tag the same way you use it with v-if
- you can use v-for to loop through key-value pain inside an object using the same exact syntax
    > <span v-for="(value, key) in person"><span>, you can give any name you want for "value" and "key"
    > <span v-for="(value, key, index) in person"><span>, where index is the number of the current iteration
- you can use v-for to loop through a specific number
    > <span v-for="(n in 10)">{{ n }}</span>



