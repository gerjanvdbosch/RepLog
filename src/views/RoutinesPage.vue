<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-segment value="routines">
          <ion-segment-button value="routines">
            <ion-label>Routines</ion-label>
          </ion-segment-button>
          <ion-segment-button value="exercises">
            <ion-label>Exercises</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Routines</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Routines" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonSegment, IonSegmentButton, IonLabel, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
