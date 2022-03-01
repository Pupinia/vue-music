import SongItem from '@/components/SongItem.vue';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';

describe('SongItem.vue', () => {
  test('render song.displayName', () => {
    const song = {
      displayName: test,
    };
    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: { 'router-link': RouterLinkStub },
      },
    });

    expect(wrapper.text()).toContain(song.displayName);
  });

  test('renders song.docID in id atribute', () => {
    const song = {
      displayName: test,
    };
    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: { 'router-link': RouterLinkStub },
      },
    });

    // expect(wrapper.attributes().id).toBe(`song-id-${song.docId}`);

    expect(wrapper.classes()).toContain(`song-id-${song.docId}`);
  });
});
