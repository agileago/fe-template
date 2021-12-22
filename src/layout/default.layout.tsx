import { RouterLink, RouterView } from 'vue-router'
import { Button } from 'ant-design-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
      <>
        <div style={{ textAlign: 'center' }}>
          <h2>I am layout</h2>
          <RouterLink to={'/'}>
            <Button danger type={'primary'}>
              go to Home
            </Button>
          </RouterLink>
          <RouterLink to={'/count'}>
            <Button type={'primary'}>go to Count</Button>
          </RouterLink>
        </div>
        <RouterView></RouterView>
      </>
    )
  },
})
