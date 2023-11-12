<template>
  <Card title="问题汇总" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <List item-layout="horizontal" :data-source="questionInfoItems">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta>
            <template #description>
              {{ item.date }}
            </template>
            <!-- eslint-disable-next-line -->
            <template #title> 
              <div class="title-area" @click="jumpToDetail(item.link)">
                {{ item.name }} <span v-html="item.desc"> </span> 
              </div>
            </template>
            <template #avatar>
              <Icon :icon="item.avatar" :size="30" />
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </Card>
</template>
<script lang="ts" setup>
  import { Card, List } from 'ant-design-vue';
  import { questionInfoItems } from './data';
  import { Icon } from '/@/components/Icon';
  import { router } from '/@/router';

  const ListItem = List.Item;
  const ListItemMeta = List.Item.Meta;

  const jumpToDetail = (link) => {
    link && router.push(link);
  }
</script>

<style lang="less" scoped>
.title-area {
  cursor: pointer;
}
</style>
