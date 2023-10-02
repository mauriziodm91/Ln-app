import Banner from './components/Banner/Banner.component'
import SideBarItem from './components/SideBarItem/SideBarItem.component'
import Rowgroup from './components/RowGroup/Rowgroup.component'
import TitleContainer from './components/TitleContainer/TitleContainer.component'
import TagsContainer from './components/TagsContainer/TagsContainer.component'
import ArticleGrid from './components/ArticleGrid/ArticleGrid.component'
import Button from './components/Button/Button.component'

const App = () => {
  return (
    <div id='wrap'>
      <main>
        <div className='lay-sidebar'>
          <SideBarItem location='main'>
            <Rowgroup>
              <TitleContainer>Acumulado Grilla</TitleContainer>
            </Rowgroup>
            <Rowgroup>
              <TagsContainer />
            </Rowgroup>
            <ArticleGrid />
            <section className='row'>
              <div className='col-12 hlp-text-center hlp-margintop-40'>
                <Button type='secondary'>MÁS NOTAS DE ACUMULADO GRILLA</Button>
              </div>
            </section>
          </SideBarItem>
          <SideBarItem location='aside'>
            <Banner bannerSize='--desktop --large' />
            <div className='com-ranking hlp-none hlp-tablet-none'>
              <h2 className='com-title-section-m'>Recetas más leídas</h2>
            </div>
            <Banner bannerSize='--desktop --large' />
          </SideBarItem>
        </div>
      </main>
    </div>
  )
}

export default App
