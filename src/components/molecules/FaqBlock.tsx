import { Details } from "../atoms/Details"

export function FaqBlock() {
  return (
    <div className="m-auto max-w-[550px] my-3.5 text-left border-separators sm:border-t">
      <Details title="What is Bookmark?" p="
                    Integer vulputate diam id blandit dapibus. Curabitur auctor elit nec magna tristique tempus.
                  Curabitur ornare, odio vel sagittis consequat, erat justo posuere felis, ut consectetur lorem
                  tellus in justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis egestas. Sed consequat sed est ac bibendum. Vivamus sed viverra risus, non ultricies
                  quam. Vivamus eros sem, porta eget dolor id, porta ornare ipsum. Mauris ultricies maximus purus.
                    "/>
      <Details title="How can I request a new browser?" p="
                    Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut
                  rhoncus diam
                  egestas sapien
                  ullamcorper, eget elementum magna luctus. Donec gravida purus lorem, placerat dapibus sapien
                  ullamcorper malesuada. Aliquam auctor, urna vitae facilisis accumsan, lacus elit laoreet libero,
                  at bibendum arcu sem sit amet diam. Praesent eu mollis erat, ut malesuada magna.
                    "/>
      <Details title="Is there a mobile app?" p="
                   Aenean aliquet molestie ante, quis commodo augue accumsan id. Nam at urna in ligula venenatis
                  dignissim non egestas ipsum. Vivamus luctus dictum enim, a posuere mauris efficitur non.
                  Praesent lobortis blandit nisl viverra ultrices. Suspendisse molestie erat ultrices eros
                  fringilla congue. Donec augue eros, ultrices eget faucibus non, vulputate et metus. Etiam
                  facilisis dui vel bibendum hendrerit."/>
      <Details title="What about other Chromium browsers?" p="
                   Duis consequat, est at efficitur eleifend, mi ipsum tincidunt ex, sed tristique nunc dolor sed
                  ligula. Sed ac pellentesque erat. Integer aliquam semper rhoncus. Integer aliquam elementum
                  nulla, vitae tempor eros efficitur sit amet. Nullam mauris magna, suscipit at tempor non,
                  interdum in lorem."/>

    </div>
  )
}