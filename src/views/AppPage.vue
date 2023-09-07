<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="log" href="/log">
          <ion-icon aria-hidden="true" :icon="timeOutline" />
          <ion-label>Log</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="workouts" href="/workouts">
          <ion-icon aria-hidden="true" :icon="barbellOutline" />
          <ion-label>Workouts</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="progress" href="/progress">
          <ion-icon aria-hidden="true" :icon="statsChart" />
          <ion-label>Progress</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { barbellOutline, statsChart, timeOutline, gridOutline, body } from 'ionicons/icons';
</script>
