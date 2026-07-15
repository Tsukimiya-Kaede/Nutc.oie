import "server-only";

export type AttendanceRecord = { date: string; time: string; status: string; reason: string; stage: number; hours: number };
export type StudentResult = { name: string; records: AttendanceRecord[]; absentHours: number; attendanceRate: number };
export type TeacherQa = { teacher: string; course: string; date: string; question: string; answer: string; stage: number };

export const teacherQa: TeacherQa[] = [
  { teacher: "李桂春", course: "AI 資訊安全與生成式 AI 倫理實務", date: "7 月 10 日", question: "現在或者未來是不是網路攻防戰都會用 AI 去做？", answer: "八成是的。", stage: 1 },
  { teacher: "李桂春", course: "AI 資訊安全與生成式 AI 倫理實務", date: "7 月 10 日", question: "還有必要練攻防或者打基礎嗎？", answer: "要，不然你連怎麼指揮佈局 AI 都無從下手。有一群人非常認真學——詐騙集團。", stage: 1 },
];

const names: Record<string, string> = {
  "1":"曾子珊","2":"楊立承","3":"張凱能","4":"吳宗叡","5":"賴晨祐","6":"王宥媛","7":"王怡甯","8":"吳淑芬","9":"蘇奕庭","10":"李佳軒","11":"王文博","12":"謝岳勲","13":"李哲宇","14":"鍾岳芸","15":"羅卉媜","16":"陳冠錚","17":"王順福","18":"林詩筑","19":"郭羭鍰","20":"阮臣安","21":"陳瑋柔","22":"林姿亭","23":"蔡沛瑾","24":"張瀞文","25":"郭天璦","26":"張欣喬","27":"李尚恩","28":"蔡奕樂","29":"王翊臻","30":"賴宛謙","31":"黃美禎","32":"陳育珊"
};

const hashes: Record<string, string> = {
  '1':'e3ea18e11d12767f873103d6ef35f0a1c6c73c5776af05c3a2ea44d4733b808b','2':'3c6299bb16de32f341fd09386e6baead675151d85278ea8f1c1203cc99fcf7b1','3':'752adb319ac4832621e542cd324eaaee4b5bbf364ccb6c22e0cb2400dc29bbbc','4':'10087f8101f5f4f0c73d1f098b9c9833e1ea6ee7f8bc92a7992ea0cb4d2b3a9b','5':'3dd2e2296a97654dca7c188a28f057d51609a19d480454edd565279f41af0ab0','6':'c12476914f10f24cf78c40cad89fc95d9a60a82f7e9d4d3a875c1d41eb2525df','7':'f39ae411af40b75bdfa7b0099d2881d94af5b672d8e60de359d64dea231099f5','8':'130b496e7cd6426ffa8e779a35bfd842231e3a574e1057593cfcbc83e691b211','9':'120c255ceba238b9009de114ac3e68e8f0cb78ca6b5080f5d41b1022d03a46cb','10':'7cc0ee97b4ffc70423f93b20867c69c66460f76c51e198fa6c9f7a13567dc54f','11':'1f95a83c5014f49f5864b37bfbcbb7b3d18a52674699c2ca46a04a1008515628','12':'d07602a6076b16c2d86b22a21f5eaa95800ad72772eb093e474dc694e3b65f79','13':'2141bebcf285221fad830c60d05769ab8a3f882254ee33c28a6c97d7faab71f2','14':'b365f2d05d93fe5d6b45530d45c7b93dac9a3d9d243b2e5ad3d8bf948b470aff','15':'cdfcd13c156aaf76715bf15f5667da8da41fb95d175e52904ad204cd48d3f1d9','16':'973a48f8545adbacdd6314320c6132055f4c38d8d55aa1cd3f98e2021709f047','17':'74ebd9f78068341d45f1b7b090ca39b6fa0702cf7bc8ff63b3695437b0fc82c5','18':'4688043094ef60c164492349a1bc547de2701b87bc9e2d42cccebeb43e55d461','19':'49d02daca66c8f0f52bdca84f3093c4a88d7dc0dcc4238038cd9cb7f0e956422','20':'507706f12ffe44a7acc95be2d712d229292345ae090aaea94e53b55bc8e23bec','21':'c48f8fff363d784262d7fe345f2927f95fb3170a2e1aae14c6b7eb0bcf32de1c','22':'24f067b2b3624067ea3eb7f1383d846bab10b9b35dfc4e3bfaaa4d1204b7ed4e','23':'f7f8c321e25f352bce0d13da707eaf00e903f2949df245789b42c31834abf324','24':'9243d31ae886458690c9cf17bb143e4d25a61b66965d6e08639d7f9110185c47','25':'525db7b3eff669721b9281d4a13be8ae8e8468cddc058c75fb273a3ec3ef1eeb','26':'2c2269dfeb5722ca6593d7a94e3b7fd969b4503cd712b509d55b752148f9db39','27':'d773a95c221fc8355a1193db4349604a49239670ccaf25d4f219bf95ac5345db','28':'29f4e3f7283b14d15f6686b265737e39378dc3af157739213af579ffb7e560b9','29':'944e363d0b17b3f56d765f3355bdd6c2898f29631d1b094a7fa10ee7f0f1aef9','30':'d0351ff55c566a045336e60e021ea48d0863a87d8c5a5f710175bab81bd3d003','31':'fe26292ea0d5b012f50617d78301e31bbc0bbc9f9969cd71373749834d24f56b','32':'8db5b04cde4a804f569f282009e3f7ee5660915cb24f328e5173cc513a1afa1c'
};

const records: Record<string, AttendanceRecord[]> = {
  "5":[{date:"2026/07/09",time:"08:00–09:00",status:"曠課",reason:"未填寫",stage:1,hours:1},{date:"2026/07/10",time:"13:00–16:00",status:"曠課",reason:"未填寫",stage:1,hours:3}],
  "7":[{date:"2026/07/09",time:"08:00–09:00",status:"曠課",reason:"未填寫",stage:1,hours:1},{date:"2026/07/15",time:"08:00–10:00",status:"曠課",reason:"未填寫",stage:1,hours:2}],
  "8":[{date:"2026/07/09",time:"08:00–17:00",status:"事假",reason:"碩論口試",stage:1,hours:9},{date:"2026/07/15",time:"08:00–11:00",status:"曠課",reason:"未填寫",stage:1,hours:3}],
  "11":[{date:"2026/07/10",time:"08:00–09:00",status:"事假",reason:"未填寫",stage:1,hours:1},{date:"2026/07/15",time:"08:00–09:00",status:"曠課",reason:"未填寫",stage:1,hours:1}],
  "13":[{date:"2026/07/10",time:"08:00–17:00",status:"事假",reason:"未填寫",stage:1,hours:9}],
  "17":[{date:"2026/07/10",time:"13:00–14:00",status:"曠課",reason:"未填寫",stage:1,hours:1}],
  "25":[{date:"2026/07/08",time:"08:00–12:00",status:"病假",reason:"未填寫",stage:1,hours:4}],
  "28":[{date:"2026/07/10",time:"08:00–09:00",status:"曠課",reason:"未填寫",stage:1,hours:1},{date:"2026/07/14",time:"08:00–12:00",status:"事假",reason:"未填寫",stage:1,hours:4}]
};

export async function authenticate(id: string, password: string): Promise<StudentResult | null> {
  const normalizedId = id.trim().replace(/^0+/, "") || "0";
  if (!/^\d{1,2}$/.test(normalizedId) || !/^\d{3}$/.test(password)) return null;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${normalizedId}:${password}:class-one-2026`));
  const actual = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, "0")).join("");
  if (!hashes[normalizedId] || actual !== hashes[normalizedId]) return null;
  const ownRecords = records[normalizedId] ?? [];
  const absentHours = ownRecords.reduce((sum, row) => sum + row.hours, 0);
  return { name: names[normalizedId], records: ownRecords, absentHours, attendanceRate: Math.max(0, ((120 - absentHours) / 120) * 100) };
}
