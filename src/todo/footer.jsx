import  '../assets/styles/footer.styl'

export  default {
    render() {
        data(){
            return {
                author: 'SongXingguo'
            }
        }
        return (
            <div id="footer">
                <span>Written by { this.author }</span>
            </div>
        )
    }
}