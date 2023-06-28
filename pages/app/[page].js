import { useRouter } from "next/router";
import Link from "next/link";
import PrimaryColorGen from "../../components/primaryColorGen";
// import PageB from '../../components/PageB';
// import PageC from '../../components/PageC';

function AppPage() {
  const router = useRouter();
  const { page } = router.query;

  let Component;
  switch (page) {
    case "primaryColorGen":
      Component = PrimaryColorGen;
      break;
    // case 'pageB':
    //   Component = PageB;
    //   break;
    // case 'pageC':
    //   Component = PageC;
    //   break;
    default:
      Component = PrimaryColorGen;
  }

  return (
    <div>
      <nav>
        <Link href="/app/primaryColorGen">Color Generator</Link>
        {/* <Link href="/app/pageB">
          <a>Page B</a>
        </Link>
        <Link href="/app/pageC">
          <a>Page C</a>
        </Link> */}
      </nav>
      <Component />
    </div>
  );
}

export default AppPage;
