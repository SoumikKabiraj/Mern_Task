import React from 'react';
function Wordcnt() {
    const [state, setState] = React.useState(
        {
            wordCount: 0
        }
    );
    const fun = (e) => 
    {
        const count = e.target.value;
        const countWords = (count) => 
        {
            if (count.length === 0) 
            {
                return 0;
            } 
            else 
            {
                count = count.replace(/(^\s*)|(\s*$)/gi,"");// removing blank spaces in first and last of the code
                count = count.replace(/[ ]{2,}/gi," ");// removing multiple spaces
                count = count.replace(/\n /,"\n");// removing next line cases
                return count.split(' ').length; 
            }   
        }
        setState({ wordCount: countWords(count)
        });
    }
    return (
    <div className="container d-flex align-items-center justify-content-center w-100">
        <div className="justify-content-center w-75 p-3">
            <h1>Responsive Paragraph Word Counter:
            </h1>
            <form>
                <textarea placeholder='Type here' class="form-control" id="textAreaExample5" rows="7" onChange={fun}>    
                </textarea>
            </form> 
            <h3> Word Count: 
                <span className='num'> 
                    {state.wordCount}
                </span> 
            </h3>
        </div>
    </div>
  )
};
export default Wordcnt
