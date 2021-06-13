import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function SkeletonPostCard() {
  const fakeArray = [1, 2, 3, 4, 5, 6, 7];
  return (
    <SkeletonTheme color="#1b2c48" highlightColor="#192942">
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <Skeleton height={192} />
        </div>
        <div className="flex-1 bg-card-post-100 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <a className="block mt-2">
              <p className="text-xl font-semibold flex gap-2 flex-wrap">
                <Skeleton width={100} />
                <Skeleton width={150} />
                <Skeleton width={150} />
                <Skeleton width={120} />
              </p>
              <p className="mt-3 text-base flex-wrap flex gap-2">
                {fakeArray.map((i) => (
                  <Skeleton
                    key={i}
                    width={Math.floor(
                      Math.random() * (Math.floor(150) - Math.ceil(50)) +
                        Math.ceil(50),
                    )}
                    height={15}
                  />
                ))}
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex space-x-1 text-sm">
              {/*{toDate({ dateString: publishedAt })}*/}
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default SkeletonPostCard;
