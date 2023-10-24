<template>
    <div>
        <h4>Tags</h4>
        <div class="tag-list">
            <span :class="{ taggg: isActive[tag].value === true }" v-for="tag in tags" :key="tag" @click="filterTag(tag)">#{{ tag }}</span>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'


export default {
    setup() {
        const tags = ['news', 'webdev', 'coding', 'css', 'vue']
        
        const isActive = {}
        tags.forEach((tag) => {
            isActive[tag] = ref(false) 
        })
        
        const filterTag = (tag) => {
            for (const tag in isActive) {
                isActive[tag].value = false; 
            }
            isActive[tag].value = true;
            
        }



        return { tags, isActive, filterTag }
    }
}
</script>

<style>
.taggg{
    color: orange;
    font-weight: bold;
}

.tag-list span{
    cursor: pointer;
    padding: 0 10px;
}

</style>