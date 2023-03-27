/**
 * type DeviceType = {
    readonly laptop: "1TB";
    readonly pad: "512G";
    readonly mobile: "128G";
}
 */

const DEVICE = { laptop: '1TB', pad: '512G', mobile: '128G' } as const;

type DeviceType = typeof DEVICE;

/**
 * type DeviceKeys = "laptop" | "pad" | "mobile"
 */

type DeviceKeys = keyof DeviceType;

/**
 * type DeviceValues = "1TB" | "512G" | "128G"
 */

type DeviceValues = DeviceType[DeviceKeys];
type Storages = typeof DEVICE[keyof typeof DEVICE];


declare function isDevice(device: DeviceKeys): boolean;

// const useDevice = () => {
//   const isLaptop = isDevice('laptop');
//   const isPad = isDevice('pad');
//   const isMobile = isDevice('mobile');
//   return {isLaptop, isPad, isMobile}
// }


/**
 * ----- return type -----
 */
type UseDevice = {
  [K in `is${Capitalize<DeviceKeys>}`] : ReturnType<typeof isDevice>
}

const useDevice = (): UseDevice => {
  const isLaptop = isDevice('laptop');
  const isPad = isDevice('pad');
  const isMobile = isDevice('mobile');
  return { isLaptop, isPad, isMobile }
}

// benefit
// const DEVICE = { laptop: '1TB', pad: '512G', mobile: '128G', watch: '1G' } as const;


declare function useDeviceStorage(): Storages

const storage = useDeviceStorage();
type typeStorage = typeof storage
const foo: typeof storage = '128Go'