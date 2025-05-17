<script setup lang="ts">
import type { MenuItem } from '@/utils/order';
import { handleImageError } from '@/utils/handleImageError';

import { ref } from 'vue';

import { Minus, Plus } from "lucide-vue-next";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const count = ref(1);
const props = defineProps<{ isDialogOpen: boolean, selectedMenuItem: MenuItem | null }>()
const emit = defineEmits<{
    (e: 'addToCart', item: MenuItem, amount: number): void;
    (e: 'close'): void
}>()


function increaseOrDecreaseCounter(type: "increase" | "decrease") {
	if (type === "increase") {
		count.value++;
	}
	else {
		if (count.value > 1) {
			count.value--;
		}
	}
}

function addToCart(item: MenuItem, amount: number) {
	emit('addToCart', item, amount);
    emit('close');
}
</script>

<template>
    <Dialog :open="props.isDialogOpen" @update:open="val => { if (!val) emit('close') }">
        <DialogContent class="sm:max-w-[425px] p-0 overflow-hidden">
            <div class="p-6 pb-0">
                <DialogHeader>
                    <DialogTitle class="text-center">
                        Detail Menu
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <div class="my-4 w-full h-60 overflow-hidden rounded-lg bg-zinc-800">
                        <client-only>
                            <img
                                :src="selectedMenuItem?.img || '/placeholder.svg'"
                                alt=""
                                class="w-full h-full object-cover"
                                @error="handleImageError"
                            >
                        </client-only>
                    </div>

                    <div>
                        {{ selectedMenuItem?.name }}
                    </div>

                    <DialogDescription>
                        {{ selectedMenuItem?.dsc }}
                    </DialogDescription>

                    <div class="text-xl text-blue-600 py-2">
                        {{ selectedMenuItem?.price }} ฿
                    </div>

                    <div>
                        <Input placeholder="Add notes to order..." />
                    </div>

                    <div class="flex justify-between bg-zinc-800 rounded-full p-1 mt-2">
                        <button
                            type="submit"
                            class="text-white hover:bg-zinc-700 cursor-pointer focus:outline-none bg-zinc-900 w-8 h-8 rounded-full justify-center flex items-center"
                            aria-label="Search"
                            @click="increaseOrDecreaseCounter('decrease')"
                        >
                            <Minus />
                        </button>

                        <input
                            v-model="count"
                            class="flex items-center text-center"
                        >

                        <button
                            type="submit"
                            class="text-white hover:bg-zinc-700 cursor-pointer focus:outline-none bg-zinc-900 w-8 h-8 rounded-full justify-center flex items-center"
                            aria-label="Search"
                            @click="increaseOrDecreaseCounter('increase')"
                        >
                            <Plus />
                        </button>
                    </div>
                </div>
            </div>
            <DialogFooter>
                <div class="w-full">
                    <button 
                        class="w-full bg-blue-600 p-5 hover:bg-blue-700" 
                        @click="selectedMenuItem && addToCart(selectedMenuItem, count) && emit('close')"
                    >
                        Add to Cart ({{ selectedMenuItem?.price !== undefined ? (selectedMenuItem?.price * count) : 0 }} ฿)
                    </button>
                </div>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>