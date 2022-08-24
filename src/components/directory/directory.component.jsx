import './directory.styles.scss';
import CategoryContainer from '../categorycontainer/category.container';

const Directory = ({categories})=>{
    return(
        <div className='categories-container'>
        {categories.map((category) => (
        <CategoryContainer key= {category.id} category={category}/>
        ))}
      
      </div>
    );
}; 
export default Directory;