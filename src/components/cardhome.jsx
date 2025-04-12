import './card.css';

export default function Card({text,title,image}) {
  return (
    <>
<section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div class="article-body">
        <h2>
          {title}
        </h2>
        <p>
          {text}
        </p>
        
      </div>
    </div>
  </article>

  
</section>
    </>
  );
}
