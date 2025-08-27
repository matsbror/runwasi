window.BENCHMARK_DATA = {
  "lastUpdate": 1756258661053,
  "repoUrl": "https://github.com/matsbror/runwasi",
  "entries": {
    "HTTP Throughput": [
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93753c7ec8b81aae0620ca77e2d1f22d0b905693",
          "message": "chore(deps): bump lycheeverse/lychee-action from 2.4.1 to 2.5.0 (#1028)\n\nBumps [lycheeverse/lychee-action](https://github.com/lycheeverse/lychee-action) from 2.4.1 to 2.5.0.\n- [Release notes](https://github.com/lycheeverse/lychee-action/releases)\n- [Commits](https://github.com/lycheeverse/lychee-action/compare/82202e5e9c2f4ef1a55a3d02563e1cb6041e5332...5c4ee84814c983aa7164eaee476f014e53ff3963)\n\n---\nupdated-dependencies:\n- dependency-name: lycheeverse/lychee-action\n  dependency-version: 2.5.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T17:40:04Z",
          "url": "https://github.com/matsbror/runwasi/commit/93753c7ec8b81aae0620ca77e2d1f22d0b905693"
        },
        "date": 1756258099941,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20499.2611,
            "unit": "req/s"
          }
        ]
      }
    ],
    "HTTP Latency": [
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93753c7ec8b81aae0620ca77e2d1f22d0b905693",
          "message": "chore(deps): bump lycheeverse/lychee-action from 2.4.1 to 2.5.0 (#1028)\n\nBumps [lycheeverse/lychee-action](https://github.com/lycheeverse/lychee-action) from 2.4.1 to 2.5.0.\n- [Release notes](https://github.com/lycheeverse/lychee-action/releases)\n- [Commits](https://github.com/lycheeverse/lychee-action/compare/82202e5e9c2f4ef1a55a3d02563e1cb6041e5332...5c4ee84814c983aa7164eaee476f014e53ff3963)\n\n---\nupdated-dependencies:\n- dependency-name: lycheeverse/lychee-action\n  dependency-version: 2.5.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T17:40:04Z",
          "url": "https://github.com/matsbror/runwasi/commit/93753c7ec8b81aae0620ca77e2d1f22d0b905693"
        },
        "date": 1756258102504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.3,
            "unit": "ms"
          }
        ]
      }
    ],
    "Criterion.rs Benchmark": [
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93753c7ec8b81aae0620ca77e2d1f22d0b905693",
          "message": "chore(deps): bump lycheeverse/lychee-action from 2.4.1 to 2.5.0 (#1028)\n\nBumps [lycheeverse/lychee-action](https://github.com/lycheeverse/lychee-action) from 2.4.1 to 2.5.0.\n- [Release notes](https://github.com/lycheeverse/lychee-action/releases)\n- [Commits](https://github.com/lycheeverse/lychee-action/compare/82202e5e9c2f4ef1a55a3d02563e1cb6041e5332...5c4ee84814c983aa7164eaee476f014e53ff3963)\n\n---\nupdated-dependencies:\n- dependency-name: lycheeverse/lychee-action\n  dependency-version: 2.5.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T17:40:04Z",
          "url": "https://github.com/matsbror/runwasi/commit/93753c7ec8b81aae0620ca77e2d1f22d0b905693"
        },
        "date": 1756258112058,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14900,
            "unit": "kB",
            "extra": "shim: 11992 kB\nzygote: 2908 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66080,
            "unit": "kB",
            "extra": "shim: 53516 kB\nzygote: 12564 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18244,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3396 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19984,
            "unit": "kB",
            "extra": "shim: 16500 kB\nzygote: 3484 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93753c7ec8b81aae0620ca77e2d1f22d0b905693",
          "message": "chore(deps): bump lycheeverse/lychee-action from 2.4.1 to 2.5.0 (#1028)\n\nBumps [lycheeverse/lychee-action](https://github.com/lycheeverse/lychee-action) from 2.4.1 to 2.5.0.\n- [Release notes](https://github.com/lycheeverse/lychee-action/releases)\n- [Commits](https://github.com/lycheeverse/lychee-action/compare/82202e5e9c2f4ef1a55a3d02563e1cb6041e5332...5c4ee84814c983aa7164eaee476f014e53ff3963)\n\n---\nupdated-dependencies:\n- dependency-name: lycheeverse/lychee-action\n  dependency-version: 2.5.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T17:40:04Z",
          "url": "https://github.com/matsbror/runwasi/commit/93753c7ec8b81aae0620ca77e2d1f22d0b905693"
        },
        "date": 1756258288407,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141540312,
            "range": "± 2974906",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83400652,
            "range": "± 1724917",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114013488,
            "range": "± 1561261",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 126875725,
            "range": "± 1927347",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 138302354,
            "range": "± 8597447",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 142343139,
            "range": "± 2221366",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 90502416,
            "range": "± 3189149",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 91437745,
            "range": "± 2402982",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Stress Test Benchmark": [
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93753c7ec8b81aae0620ca77e2d1f22d0b905693",
          "message": "chore(deps): bump lycheeverse/lychee-action from 2.4.1 to 2.5.0 (#1028)\n\nBumps [lycheeverse/lychee-action](https://github.com/lycheeverse/lychee-action) from 2.4.1 to 2.5.0.\n- [Release notes](https://github.com/lycheeverse/lychee-action/releases)\n- [Commits](https://github.com/lycheeverse/lychee-action/compare/82202e5e9c2f4ef1a55a3d02563e1cb6041e5332...5c4ee84814c983aa7164eaee476f014e53ff3963)\n\n---\nupdated-dependencies:\n- dependency-name: lycheeverse/lychee-action\n  dependency-version: 2.5.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T17:40:04Z",
          "url": "https://github.com/matsbror/runwasi/commit/93753c7ec8b81aae0620ca77e2d1f22d0b905693"
        },
        "date": 1756258660596,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.54158556351293,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 686ms 97us 587ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.491994391953064,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 979ms 428us 81ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.976781225361,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 770ms 21us 205ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.406288167922181,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 414ms 132us 797ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 45.053769916622656,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 22s 195ms 700us 867ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 33.42964256683246,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 29s 913ms 571us 406ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.103673948856404,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 903ms 510us 931ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.179783586558294,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 616ms 875us 974ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 89.56841197091975,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 164ms 650us 327ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 81.6004714473113,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 254ms 831us 158ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.63957783607267,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 97ms 678us 550ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.599520328720823,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 4s 104ms 535us 199ns"
          }
        ]
      }
    ]
  }
}