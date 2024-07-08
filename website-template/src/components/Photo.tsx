import { PhotoType } from '../types/PhotoType';

const Photo = ({ albumId, id, title, url, thumbnailUrl }: PhotoType) => {
  return (
    <article className="gridItem grid-s-span6 grid-xxl-span4">
      <h3>{title}</h3>
      <p>
        <strong>
          Photo ID: {id}. Album ID: {albumId}
        </strong>
      </p>
      <p>URL: {url}</p>
      <img src={thumbnailUrl} alt={title} />
    </article>
  );
};

export default Photo;
