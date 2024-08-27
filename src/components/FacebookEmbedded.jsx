import PropTypes from 'prop-types';

const FacebookEmbedded = ({ width = 340 }) => {
    return (
        <iframe
            src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCLBNCKHKhoaY&tabs=&width=${width}&height=60&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
            width={width}
            height={60}
            style={{ border: 'none', width: `${width}px` }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
    );
};
FacebookEmbedded.propTypes = {
    width: PropTypes.number,
};

export default FacebookEmbedded;